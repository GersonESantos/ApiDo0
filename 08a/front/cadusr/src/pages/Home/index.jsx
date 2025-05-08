import { useEffect, useState, useCallback } from 'react';

function Home() {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const response = await api.get('/usuarios');
    setUsers(response.data);
  }, []); // Sem dependências, a função será memorizada

  useEffect(() => {
    getUsers();
  }, [getUsers]); // Inclua getUsers como dependência

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