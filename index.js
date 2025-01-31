const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Rota para listar todos os usuários
app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany(); // Busca todos os usuários do banco
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários.' });
  }
});

// Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { email, name, age, address } = req.body; // Incluímos o campo 'address'

    // Criação do usuário no banco usando Prisma
    const user = await prisma.user.create({
      data: { email, name, age, address },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

// Iniciar o servidor
app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 3000');
});

app.put('/usuarios/:id', async (req, res) => {
    try {
      const { id } = req.params; // Captura o ID da URL
      const { email, name, age, address } = req.body; // Captura os campos do corpo da requisição
  
      // Atualiza o usuário no banco usando Prisma
      const user = await prisma.user.update({
        where: { id }, // Certifique-se de que o ID está correto
        data: { email, name, age, address },
      });
  
      res.status(200).json(user); // Retorna o usuário atualizado
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
  
      // Verifica se o erro é causado por um ID inexistente
      if (error.code === 'P2025') {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      } else {
        res.status(500).json({ error: 'Erro ao atualizar usuário.' });
      }
    }
  });

  app.delete('/usuarios/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Deletar o usuário do banco
      await prisma.user.delete({
        where: { id },
      });
  
      res.status(200).json({ message: 'Usuário deletado com sucesso!' });
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
  
      // Lidar com erros de usuário não encontrado
      if (error.code === 'P2025') {
        res.status(404).json({ error: 'Usuário não encontrado.' });
      } else {
        res.status(500).json({ error: 'Erro ao deletar usuário.' });
      }
    }
  });
  
        