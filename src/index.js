import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  return (
    <div className='cart-container'>
      <Header />

      <Menu />

      <Footer />
    </div>
  )
}

function Header() {
  return (
    <div>
      <h1>Fast React Pizza</h1>
    </div>
  )
}

function Menu() {
  return (
    <div>
      <h2>Pizza</h2>
      <Pizza
        img='/pizzas/focaccia.jpg'
        alt='focaccia'
        author='naa'
        detail='If im not happy goo to beach'
      />

      <Pizza
        img='/pizzas/funghi.jpg'
        alt='focaccia'
        author='naa'
        detail='If im not happy goo to beach'
      />

    </div>
  )
}

function Footer() {
  
  const hour = new Date().getHours()
  const openHour = 12
  const clossHour = 22;
  const isOpen = hour >= openHour && hour <= clossHour

  return(
    <div>
      <p>{new Date().toLocaleTimeString()}. We're here</p>
    </div>)

}

function Pizza(props) {
  return (
    <div className='card'>
      <img src={props.img} alt={props.alt} />
      <h3>{props.author}</h3>
      <p>{props.detail}</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
