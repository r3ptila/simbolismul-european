import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"

export default function Card(props) {
  return (
    <>
      <li className='card-item'>
          <Link to={props.to} className='card-item-link'>
            <figure className='card-item-pic-wrap'>
              <img src={props.src} alt="Card" className='card-item-img' height='160px' max-width='340px' />
            </figure>
            <div className='card-item-info'>
              <p className='card-item-text'>{props.text}</p>
            </div>
          </Link>
      </li>
    </>
  )
}
 