import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <>
      <li className='card-item'>
        <Link className='card-item-link'>
          <figure className='card-item-pic-wrap'>
            <img src={props.src} alt='Card Image' className='card-item-img' />
          </figure>
          <div className='card-item-info'>
            <h5 className='card-item-text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}
