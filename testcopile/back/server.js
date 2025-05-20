import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

// Criação de usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { email, name, age } = req.body;
    if (!email || !name || !age) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }
    const user = await prisma.user.create({
      data: { email, name, age },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

// Listagem de usuários (com filtro opcional)
app.get('/usuarios', async (req, res) => {
  try {
    const { name, email, age } = req.query;
    const filters = {};
    if (name) filters.name = name;
    if (email) filters.email = email;
    if (age) filters.age = age;

    const users = await prisma.user.findMany({
      where: Object.keys(filters).length ? filters : undefined,
    });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
});

// Atualização de usuário
app.put('/usuarios/:id', async (req, res) => {
  try {
    const { email, name, age } = req.body;
    const { id } = req.params;
    const user = await prisma.user.update({
      where: { id },
      data: { email, name, age },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: 'Usuário não encontrado ou erro ao atualizar.' });
  }
});

// Remoção de usuário
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.user.delete({ where: { id } });
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
  } catch (error) {
    res.status(404).json({ error: 'Usuário não encontrado ou erro ao deletar.' });
  }
});

// Rota de saúde
app.get('/', (req, res) => {
  res.send('API de Usuários rodando!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});