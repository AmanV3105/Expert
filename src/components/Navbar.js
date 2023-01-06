// It is for the navbar of the page
import React from 'react'
import '../index.css'
import tele from '../telegram (1).png'
import notif from '../notification (1).png'
import logo from '../askexperthead.jpg'

const imgstyle = {

  marginLeft: '662px'
}
export default function Navbar() {
  return (

    <>
      <nav id="navbar">
        <div id="logo">
          <img src={logo} alt="AsktoExperts.com" />
          <span style={{ margin: '-21px', fontWeight: 'bold' }}><a className="textlogo" style={{ marginLeft: '23px' }}> Ask2experts.com</a></span>
        </div>
        <ul>
          <li className="item" style={{ margin: '14px' }}><a href="#home">Home</a></li>
          <li className="item" style={{ margin: '14px' }}><a href="#Services">Services</a></li>
          <li className="item" style={{ margin: '14px' }}><a href="#about us">About Us</a></li>
          <li className="item" style={{ margin: '14px' }}><a href="#contact us">Contact us</a></li>
          <li className="item" style={imgstyle} ><a href="#"></a>
            <img src={tele} alt="" />
          </li>
          <li className="item" style={{ marginLeft: '12px' }} ><a href="#"></a>
            <img src={notif} alt="" />
          </li>

        </ul>
      </nav>
      <section id="home">
        <p className="What">What Do you want to discuss about?</p>
        <p>The key to happiness is To life , As a guest and not as an administrator</p>
        <button className="btn"> Start Free Month Trial</button>
        <div className="text2">Already a member?</div>
        <div className="sign">
          <a href="/">Sign in</a>
        </div>
      </section>
    </>
  )
}
