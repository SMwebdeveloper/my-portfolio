import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Modal.css'


export default function Modal({showModal}) {
  return (
    <div className='modal'>
      <div className='close-modal'>
          <i className='fas fa-times cm' onClick={showModal}></i>
      </div>

      <div className="cart">
          <Link to="/">Website</Link>
      </div>
      <div className="cart">
          <Link to="/">Designs</Link>
      </div>
      <div className="cart">
          <Link to="/">Templates</Link>
      </div>
      <div className="cart">
          <Link to="/">Web Apps</Link>
      </div>
    </div>
  )
}
