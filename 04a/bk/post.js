app.post('/usuarios', async (req, res) => {
    const { name, email, age } = req.body;

    if (!name || !email || !age) {
        return res.status(400).json({ error: 'Os campos name, email e age são obrigatórios.' });
    }

    const user = await prisma.user.create({
        data: { name, email, age },
    });

    res.status(201).json(user);
});