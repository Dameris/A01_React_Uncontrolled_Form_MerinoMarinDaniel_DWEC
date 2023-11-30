import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyButton from './MyButton.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <MyButton text="Botón 1" age={20} /> */}
  </React.StrictMode>
)