import React from 'react'
import '../../App.css'
import '../Lectii.css'
import Card from '../Card.js'

export default function Lectii() {
  return (
    <div className='container'>
      <ul className='cards'>
        <Card to="./lectia1" src="img/introducere.jpeg" text="L1. Despre simbolism" alt="Introducere" />
        <Card to="./lectia2" src="img/trasaturi.jpg" text="L2. Trăsături" alt="Trasaturi" />
        <Card to="./lectia3" src="img/steph.jpg" text="L3. Reprezentanți" alt="Reprezentanti" />
        <Card to="./lectia4" src="img/sro.jpg" text="L4. Simbolismul românesc" alt="Rom" />
        <Card to="./lectia5" src="img/bacovia.jpg" text="L5. Simbolismul românesc - reprezentanți" alt="Rom" />
        <Card to="./lectia6" src="img/plumb.jpg" text="L6. Plumb - analiză" alt="plumb" />
      </ul>
    </div>
  )
}