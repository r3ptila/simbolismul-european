import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'
export default function Lectia3() {
  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>
          <p className='text-lectie'>
            <table>
              <tr>
                <td>
                  <h3 className='span-color'>Paul Verlaine (1844 - 1896)</h3><br />
                  <p className='text-lectie'>
                    Este privit de simboliștii francezi ca șef al curentului. A dus o viață de boem, de „poet blestemat”, ce contrastează 
                    în planul creației cu aspirația spre puritate și candoare. Versurile de început („Poeme saturniene”, 1866), 
                    cu reminiscențe din parnasieni și din Baudelaire, afirmă tonul său inegalabil prin viziunea dramatică asupra 
                    lumii, prin înclinația către melancolie, prin căutarea armoniilor. Verlaine cultiva o lirică a sentimentelor 
                    intime, a variatelor stări sufletești, într-o atmosferă crepusculară și vagă.
                  </p>
                </td>
                <td>
                  <img className='img-rep' src='/img/verlaine.jpg' alt='verlaine' />
                </td>
              </tr>
            </table>
          </p>
          <div className='navigation'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia32'>&#8680;</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

