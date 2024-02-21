import React from 'react'
import '../../App.css'
import '../Lectii.css'
import Card from '../Card.js'

export default function Lectii() {
  return (
    <div className='container'>
      <ul className='cards'>
        <Card to="./lectia1" src ="img/introducere.jpeg" text="L1. Despre simbolism" alt="Introducere" />
        <Card to="./lectia2" src ="img/trasaturi.jpg" text="L2. Trăsături" alt="Trasaturi" />
        <Card to="./lectia3" src ="img/steph.jpg" text="L3. Reprezentanți" alt="Reprezentanti" />
        <Card to="./lectia4" src ="img/class.jpg" text="L4. Școala decadentă" alt="Reprezentanti" />
      </ul>
    </div>
  )
}