import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <h1>Contact us</h1>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Message' className='input-msg'/>
        <Link to='/'>send</Link>
    </div>
  )
}
