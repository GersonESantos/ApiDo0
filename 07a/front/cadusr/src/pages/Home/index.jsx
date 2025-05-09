
import './style.css'

function Home() {
  const users = [
    {
    id: '123456',
    name: "GersoES",
    age: 68,
    email: 'geson@gmail.com'
    },
    {
      id: '123457',
      name: "Pedro",
      age: 28,
      email: 'pedro@gmail.com'
      }
            ]
  return (
   
      <div className='container'>
        <form>
          <h1>Cadastro De Usuarios</h1>
          <input name="nome" type='text' />
          <input name="idade" type='number' />
          <input name="email" type='email' />
          <button type='button'>Cadastrar</button>
        </form>
      { users.map( user => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img />
          </button>
        </div>

      ))}

      </div>
     
    
  )
}

export default Home
