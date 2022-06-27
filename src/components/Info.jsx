import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Info.css'


function Info() {
  return (
    <div className='info-section'>
       <div className="info-about">
           <h3>About <span>Robb</span></h3>

           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed autem perferendis, error iusto sapiente eveniet rerum dolores rem alias eligendi mollitia doloribus nesciunt repellendus! Ullam alias molestias tenetur sapiente, sed quia aliquid, eum reiciendis soluta sit facilis consectetur ipsa tempore explicabo nihil obcaecati? Possimus provident vero quo veniam laudantium minus, libero cum aliquid, magnam eaque incidunt illo, numquam delectus voluptatem minima similique unde quod! Quo doloremque labore, nemo ex saepe incidunt sequi quos perspiciatis fugit illum! Odio aspernatur facere quibusdam numquam aperiam rerum officia laudantium sequi nihil commodi, debitis, possimus eligendi nobis voluptatem voluptatum modi reiciendis ducimus fugit nesciunt.</p>

           <div className="info-btn">
               <Link to='/'>More</Link>
           </div>
       </div>

       <div className="info-content">
           <h1>Who is Robb</h1>

           <p>Influencer & Content Creator</p>
           <p>UI & UX Designer</p>
           <p>Senior REact js Programmer</p>
           <p>JavaScript Develloper</p>
           <p>Web Developer In Facebook</p>
           <p>Something Creator in Something Company</p>
           <p>5 years of experience in Programming</p>
           <p>SQL Developer</p>
        </div>
    </div>
  )
}

export default Info