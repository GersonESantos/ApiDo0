import express from 'express';
const app = express();
app.use(express.json());
const users = [];

app.get('/usuarios', (req, res) => {
    res.send('Ok Get Deu Certo');
    // res.status(200).json(users);
   });

app.post('/usuarios', (req, res) => {
  users.push(req.body);
  console.log(users);
  
  res.send('Ok Post Deu Certo');
  });

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
