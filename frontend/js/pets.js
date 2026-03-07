const modalForm = new bootstrap.Modal(document.getElementById('modalForm'));

// ── Definir data máxima no input (hoje) ──────────────────────
$(document).ready(function () {
  const hoje = new Date().toISOString().split('T')[0];
  $('#petNascimento').attr('max', hoje);
  carregarPets();
});

// ── Carregar tabela ──────────────────────────────────────────
function carregarPets() {
  $.ajax({
    url: `${API_BASE}/pets`,
    method: 'GET',
    success: function (pets) {
      const tbody = $('#tabelaPets');
      tbody.empty();

      if (pets.length === 0) {
        tbody.append(`
          <tr>
            <td colspan="7" class="text-center text-muted py-3">Nenhum pet cadastrado ainda.</td>
          </tr>
        `);
        return;
      }

      pets.forEach(function (pet) {
        const nascimento = pet.nascimento
          ? new Date(pet.nascimento).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
          : '—';

        tbody.append(`
          <tr>
            <td>${pet.id}</td>
            <td class="fw-semibold">${pet.nome}</td>
            <td>${pet.especie}</td>
            <td>${parseFloat(pet.peso).toFixed(2)}</td>
            <td>${pet.idade} ano(s)</td>
            <td>${nascimento}</td>
            <td class="text-center">
              <button class="btn btn-sm btn-outline-warning btn-action me-1" onclick="abrirModalEditar(${pet.id})" title="Editar">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-sm btn-outline-danger btn-action" onclick="confirmarExclusao(${pet.id}, '${pet.nome}')" title="Excluir">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        `);
      });
    },
    error: function () {
      Swal.fire({ icon: 'error', title: 'Erro!', text: 'Não foi possível carregar os pets.' });
    }
  });
}

// ── Abrir modal NOVO ─────────────────────────────────────────
function abrirModalNovo() {
  $('#modalTitulo').text('🐾 Novo Pet');
  $('#petId').val('');
  $('#petNome').val('');
  $('#petEspecie').val('').prop('selectedIndex', 0);
  $('#petPeso').val('');
  $('#petIdade').val('');
  $('#petNascimento').val('');
  modalForm.show();
}

// ── Abrir modal EDITAR ───────────────────────────────────────
function abrirModalEditar(id) {
  $.ajax({
    url: `${API_BASE}/pets/${id}`,
    method: 'GET',
    success: function (pet) {
      $('#modalTitulo').text('✏️ Editar Pet');
      $('#petId').val(pet.id);
      $('#petNome').val(pet.nome);
      $('#petEspecie').val(pet.especie);
      $('#petPeso').val(pet.peso);
      $('#petIdade').val(pet.idade);
      $('#petNascimento').val(pet.nascimento ? pet.nascimento.split('T')[0] : '');
      modalForm.show();
    },
    error: function () {
      Swal.fire({ icon: 'error', title: 'Erro!', text: 'Não foi possível carregar os dados do pet.' });
    }
  });
}

// ── Salvar (criar ou editar) ─────────────────────────────────
function salvarPet() {
  const id = $('#petId').val();
  const payload = {
    nome:       $('#petNome').val().trim(),
    especie:    $('#petEspecie').val(),
    peso:       parseFloat($('#petPeso').val()),
    idade:      parseInt($('#petIdade').val()),
    nascimento: $('#petNascimento').val() || null,
  };

  if (!payload.nome || !payload.especie || isNaN(payload.peso) || isNaN(payload.idade)) {
    Swal.fire({ icon: 'warning', title: 'Atenção!', text: 'Preencha todos os campos obrigatórios.' });
    return;
  }

  // console.log("🐾 payload enviado:", JSON.stringify(payload));
  const method = id ? 'PUT' : 'POST';
  const url    = id ? `${API_BASE}/pets/${id}` : `${API_BASE}/pets`;

  $('#btnSalvar').prop('disabled', true).html('<span class="spinner-border spinner-border-sm me-1"></span>Salvando...');

  $.ajax({
    url, method,
    contentType: 'application/json',
    data: JSON.stringify(payload),
    success: function () {
      modalForm.hide();
      carregarPets();
      Swal.fire({ icon: 'success', title: 'Sucesso!', text: id ? 'Pet atualizado!' : 'Pet cadastrado!', timer: 2000, showConfirmButton: false });
    },
    error: function () {
      Swal.fire({ icon: 'error', title: 'Erro!', text: 'Não foi possível salvar o pet.' });
    },
    complete: function () {
      $('#btnSalvar').prop('disabled', false).text('Salvar');
    }
  });
}

// ── Confirmar exclusão ───────────────────────────────────────
function confirmarExclusao(id, nome) {
  Swal.fire({
    title: 'Excluir pet?',
    html: `Tem certeza que deseja excluir <strong>${nome}</strong>?<br>Esta ação não pode ser desfeita.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#6c757d',
    confirmButtonText: '<i class="bi bi-trash me-1"></i>Sim, excluir!',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      $.ajax({
        url: `${API_BASE}/pets/${id}`,
        method: 'DELETE',
        success: function () {
          carregarPets();
          Swal.fire({ icon: 'success', title: 'Excluído!', text: `${nome} removido com sucesso.`, timer: 2000, showConfirmButton: false });
        },
        error: function () {
          Swal.fire({ icon: 'error', title: 'Erro!', text: 'Não foi possível excluir o pet.' });
        }
      });
    }
  });
}
