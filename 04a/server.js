import express from 'express';
// import pkg from '@prisma/client';

// const { PrismaClient } = pkg;
// const prisma = new PrismaClient();
const app = express();
app.use(express.json());
const users = [];

app.get('/usuarios', (req, res) => {
    res.status(200).json(users);
});

app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,
        },
    });

    res.status(201).json(req.body);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});