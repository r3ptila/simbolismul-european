import React from 'react'
import { Button } from './Button'
import './HeroS.css'

export default function HeroS() {
  return (
    <div className='body-container'>
        <h1>SIMBOLISMUL EUROPEAN</h1>
        <p>Învață despre simbolismul european cu ajutorul lecțiilor pregătite pentru tine!</p>
        <div className='body-btns'>
            <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large' to='/Lectii'>ÎNCEPE</Button>
            <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large' to='https://quizizz.com/admin/quiz/65fff876ad61fc6b852aa960?source=quiz_share' target='_blank'>TESTEAZĂ-ȚI CUNOȘTINȚELE</Button>
        </div>
    </div>
  )
}
