import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'
export default function Lectia52() {
  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>
          <p className='text-lectie'>
            <table>
              <tr>
                <td>
                  <h3 className='span-color'>Ion Minulescu (1881 - 1944)</h3><br />
                  <p className='text-lectie'>
                    Minulescu se prezintã ca un poet al tuturor, nu doar al elitelor, aşa cum s-a erijat Macedonski. Are o liricã dinamicã, 
                    lipsitã de orice sterilitate, cu o preferinţã vădită pentru trăiri, nu pentru concepte. Renunţă la polemicile de cenaclu 
                    şi la speculaţiile teoretice, el se adresează agorei însetate de poezie. Simbolul este însă prin definiţie ceva ascuns, 
                    doar sugerat prin anumite imagini difuze. Menţinând un cod, dar unul lejer şi seducător prin eufonie şi coloratură. Se 
                    străduieşte să menţină deschis orizontul imaginii. Tehnica sa poate fi privită ca un fel de dizidenţă în interiorul 
                    simbolismului.
                  </p>
                </td>
                <td>
                  <img className='img-rep' src='/img/minu.jpg' alt='minulescu' />
                </td>
              </tr>
            </table>
          </p>
          <div className='navigation'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia5'>&#8678;</Button>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia53'>&#8680;</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

