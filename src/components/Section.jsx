import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import './styles/Section.css'


export default function Section() {
  const [modalActive, setModalActive] = useState(false)

  const showModal =() =>{
    setModalActive(!modalActive)
  }
  return (
    <div className='section'>
      <div>
        <h1 className="main-header">
          My name is <span>Robb Wilson</span>
        </h1>
        <p className="main-status">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio neque culpa excepturi sapiente incidunt quod similique rerum eius recusandae a!
        </p>
        <div className="main-btn">
          <Link to="/" onClick={showModal}>see work</Link>
        </div>
         
         {modalActive && <Modal showModal={showModal}/>}
        
      </div>
    </div>
  )
}
