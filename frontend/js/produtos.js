const modalForm = new bootstrap.Modal(document.getElementById('modalForm'));

// ── Definir data mínima no input (hoje) ──────────────────────
$(document).ready(function () {
  const hoje = new Date().toISOString().split('T')[0];
  $('#produtoValidade').attr('min', hoje);
  carregarProdutos();
});

// ── Carregar tabela ──────────────────────────────────────────
function carregarProdutos() {
  $.ajax({
    url: `${API_BASE}/produtos`,
    method: 'GET',
    success: function (produtos) {
      const tbody = $('#tabelaProdutos');
      tbody.empty();

      if (produtos.length === 0) {
        tbody.append(`
          <tr>
            <td colspan="6" class="text-center text-muted py-3">Nenhum produto cadastrado ainda.</td>
          </tr>
        `);
        return;
      }

      produtos.forEach(function (produto) {
        const preco = parseFloat(produto.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        const validade = produto.validade
          ? new Date(produto.validade).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
          : '—';

        tbody.append(`
          <tr>
            <td>${produto.id}</td>
            <td class="fw-semibold">${produto.nome}</td>
            <td>${preco}</td>
            <td>${produto.quantidade}</td>
            <td>${validade}</td>
            <td class="text-center">
              <button class="btn btn-sm btn-outline-warning btn-action me-1" onclick="abrirModalEditar(${produto.id})" title="Editar">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-sm btn-outline-danger btn-action" onclick="confirmarExclusao(${produto.id}, '${produto.nome}')" title="Excluir">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        `);
      });
    },
    error: function () {
      Swal.fire({ icon: 'error', title: 'Erro!', text: 'Não foi possível carregar os produtos.' });
    }
  });
}

// ── Abrir modal NOVO ─────────────────────────────────────────
function abrirModalNovo() {
  $('#modalTitulo').text('🛍️ Novo Produto');
  $('#produtoId').val('');
  $('#produtoNome').val('');
  $('#produtoPreco').val('');
  $('#produtoQuantidade').val('');
  $('#produtoValidade').val('');
  modalForm.show();
}

// ── Abrir modal EDITAR ───────────────────────────────────────
function abrirModalEditar(id) {
  $.ajax({
    url: `${API_BASE}/produtos/${id}`,
    method: 'GET',
    success: function (produto) {
      $('#modalTitulo').text('✏️ Editar Produto');
      $('#produtoId').val(produto.id);
      $('#produtoNome').val(produto.nome);
      $('#produtoPreco').val(produto.preco);
      $('#produtoQuantidade').val(produto.quantidade);
      $('#produtoValidade').val(produto.validade ? produto.validade.split('T')[0] : '');
      modalForm.show();
    },
    error: function () {
      Swal.fire({ icon: 'error', title: 'Erro!', text: 'Não foi possível carregar os dados do produto.' });
    }
  });
}

// ── Salvar (criar ou editar) ─────────────────────────────────
function salvarProduto() {
  const id = $('#produtoId').val();
  const payload = {
    nome:       $('#produtoNome').val().trim(),
    preco:      parseFloat($('#produtoPreco').val()),
    quantidade: parseInt($('#produtoQuantidade').val()),
    validade:   $('#produtoValidade').val() || null,
  };

  if (!payload.nome || isNaN(payload.preco) || isNaN(payload.quantidade)) {
    Swal.fire({ icon: 'warning', title: 'Atenção!', text: 'Preencha todos os campos obrigatórios.' });
    return;
  }

  const method = id ? 'PUT' : 'POST';
  const url    = id ? `${API_BASE}/produtos/${id}` : `${API_BASE}/produtos`;

  $('#btnSalvar').prop('disabled', true).html('<span class="spinner-border spinner-border-sm me-1"></span>Salvando...');

  $.ajax({
    url, method,
    contentType: 'application/json',
    data: JSON.stringify(payload),
    success: function () {
      modalForm.hide();
      carregarProdutos();
      Swal.fire({ icon: 'success', title: 'Sucesso!', text: id ? 'Produto atualizado!' : 'Produto cadastrado!', timer: 2000, showConfirmButton: false });
    },
    error: function () {
      Swal.fire({ icon: 'error', title: 'Erro!', text: 'Não foi possível salvar o produto.' });
    },
    complete: function () {
      $('#btnSalvar').prop('disabled', false).text('Salvar');
    }
  });
}

// ── Confirmar exclusão ───────────────────────────────────────
function confirmarExclusao(id, nome) {
  Swal.fire({
    title: 'Excluir produto?',
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
        url: `${API_BASE}/produtos/${id}`,
        method: 'DELETE',
        success: function () {
          carregarProdutos();
          Swal.fire({ icon: 'success', title: 'Excluído!', text: `${nome} removido com sucesso.`, timer: 2000, showConfirmButton: false });
        },
        error: function () {
          Swal.fire({ icon: 'error', title: 'Erro!', text: 'Não foi possível excluir o produto.' });
        }
      });
    }
  });
}