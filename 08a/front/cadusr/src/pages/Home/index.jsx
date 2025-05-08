
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
          <input placeholder='Nome' name="nome" type='text' />
          <input placeholder='Idade' name="idade" type='number' />
          <input placeholder='E-mail' name="email" type='email' />
          <button type='button'>Cadastrar</button>
        </form>
      { users.map( user => (
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
     
    
  )
}

export default Home
