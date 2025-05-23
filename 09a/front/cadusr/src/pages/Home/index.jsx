import React, { useEffect, useState } from 'react';
import './style.css';
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await api.get('/usuarios');
        setUsers(response.data); // Agora atualiza o estado
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    getUsers(); // Chamada dentro do useEffect
  }, []);

  return (
    <div className='container'>
      <form>
        <h1>Cadastro De Usuarios</h1>
        <input placeholder='Nome' name="nome" type='text' />
        <input placeholder='Idade' name="idade" type='number' />
        <input placeholder='E-mail' name="email" type='email' />
        <button type='button'>Cadastrar</button>
      </form>
      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome:  <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
