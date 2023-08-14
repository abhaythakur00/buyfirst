import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
  const Username = localStorage.getItem('name')
  const logout = () => {
    localStorage.setItem('name', null)
    localStorage.setItem('pass', null)
    navigate('/login')
  }
  return (
    <div><div className="nav">
    <ul>
      <img
        loading="lazy"
        src={process.env.PUBLIC_URL + "images/" + "abhaY.jpg"}
        alt=""
        width="8%"
        height="5%"
      />
      <div className="div_head">
        <input type="text" placeholder=" What is on your mind today?" />
      </div>
      <button id="search">Search</button>
     { Username ?
      <>
    <div className="button-1">
      <a >
        {" "}
        <button>{Username}</button>
      </a>
    </div>
    <div className="button-1">
      <a >
        {" "}
        <button onClick={logout}>Logout</button>
      </a>
    </div></> :
    <div className="button-1">
    <a href="/login">
      {" "}
      <button>Login</button>
    </a>
  </div>}

      <div className="icon">
        
        <i className="fa-solid fa-bell" style= {{color:"#8758ffcc"}}></i>
        <a href="/cart"><i className="fa-solid fa-cart-shopping" style= {{color:"#8758ffcc"}}></i></a>


    
      </div>
    </ul>
  </div></div>
  )
}

export default Navbar