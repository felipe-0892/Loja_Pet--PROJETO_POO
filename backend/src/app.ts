import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connection from './db/database';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ─── HEALTH ────────────────────────────────────────────────
app.get('/health', async (_req, res) => {
  try {
    const [rows] = await connection.query('SELECT 1+1 AS ok') as any;
    res.json({ status: '✅ Backend e banco conectados!', db: rows[0] });
  } catch (error) {
    res.status(500).json({ status: '❌ Erro no banco', error });
  }
});

// ─── PETS ───────────────────────────────────────────────────

// Listar todos
app.get('/pets', async (_req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM pets ORDER BY id DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pets' });
  }
});

// Buscar por ID
app.get('/pets/:id', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM pets WHERE id = ?', [req.params.id]) as any;
    if ((rows as any[]).length === 0) return res.status(404).json({ error: 'Pet não encontrado' });
    res.json((rows as any[])[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pet' });
  }
});

// Criar
app.post('/pets', async (req, res) => {
  const { nome, especie, peso, idade, nascimento } = req.body;
  try {
    const [result] = await connection.query(
      'INSERT INTO pets (nome, especie, peso, idade, nascimento) VALUES (?, ?, ?, ?, ?)',
      [nome, especie, peso, idade, nascimento || null]
    ) as any;
    res.status(201).json({ id: result.insertId, nome, especie, peso, idade, nascimento });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pet' });
  }
});

// Atualizar
app.put('/pets/:id', async (req, res) => {
  const { nome, especie, peso, idade, nascimento } = req.body;
  try {
    await connection.query(
      'UPDATE pets SET nome = ?, especie = ?, peso = ?, idade = ?, nascimento = ? WHERE id = ?',
      [nome, especie, peso, idade, nascimento || null, req.params.id]
    );
    res.json({ id: req.params.id, nome, especie, peso, idade, nascimento });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar pet' });
  }
});

// Deletar
app.delete('/pets/:id', async (req, res) => {
  try {
    await connection.query('DELETE FROM pets WHERE id = ?', [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar pet' });
  }
});

// ─── PRODUTOS ───────────────────────────────────────────────

// Listar todos
app.get('/produtos', async (_req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM produtos ORDER BY id DESC');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Buscar por ID
app.get('/produtos/:id', async (req, res) => {
  try {
    const [rows] = await connection.query('SELECT * FROM produtos WHERE id = ?', [req.params.id]) as any;
    if ((rows as any[]).length === 0) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json((rows as any[])[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

// Criar
app.post('/produtos', async (req, res) => {
  const { nome, preco, quantidade, validade } = req.body;
  try {
    const [result] = await connection.query(
      'INSERT INTO produtos (nome, preco, quantidade, validade) VALUES (?, ?, ?, ?)',
      [nome, preco, quantidade, validade || null]
    ) as any;
    res.status(201).json({ id: result.insertId, nome, preco, quantidade, validade });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

// Atualizar
app.put('/produtos/:id', async (req, res) => {
  const { nome, preco, quantidade, validade } = req.body;
  try {
    await connection.query(
      'UPDATE produtos SET nome = ?, preco = ?, quantidade = ?, validade = ? WHERE id = ?',
      [nome, preco, quantidade, validade || null, req.params.id]
    );
    res.json({ id: req.params.id, nome, preco, quantidade, validade });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar produto' });
  }
});

// Deletar
app.delete('/produtos/:id', async (req, res) => {
  try {
    await connection.query('DELETE FROM produtos WHERE id = ?', [req.params.id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar produto' });
  }
});

// ─── START ──────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
