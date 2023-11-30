import React from 'react'
import './App.css'
import MyButton from './MyButton.jsx'
import ControlledForm from './formulario.jsx'

function AdminPanel() {
  return <p>Soy un AdminPanel</p>
}

function Login() {
  return <p>Soy un Login</p>
}

function App() {
  const title = "Esto es un título"
  const classTitle = "text-center"
  const srcImage = "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720"

  let userLogged = true

  const animales = ["gato", "perro", "loro", "serpiente", "delfín", "suricato"]

  return (
    <>
      {/* <p className="text-center">{title}</p>
      <p className="text-center">{title.toUpperCase()}</p>
      <p className={classTitle}>{title.toUpperCase()}</p>
      <p className={classTitle}>{1 + 1}</p>

      <img src={srcImage} alt={`srcImage - ${title}`} /> <br />

      <MyButton text="Button 0" />

      {userLogged ? <AdminPanel /> : <Login />}

      <ol>
        {animales.map((animal, index) => (
          <li key={index}>{animal}</li>
        ))}
      </ol>

      <br />

      <MyButton text="Button 1" age={20} />

      <br /> */}

      <div className='container'>
        <h1>Formulario no encontrado</h1>
        <ControlledForm />
      </div>
    </>
  )
}

export default App