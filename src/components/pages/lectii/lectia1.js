import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

export default function Lectia1() {
  return (
    <div className='container'>
      <div className='btn-container'>
        <Button buttonStyle='btn--primary' buttonSize='btn--medium' to='/Lectii'>&#8678; Înapoi la Lecții</Button>
      </div>
      <div className='text-container'>
      <h1 className='l-h1'>L1.Despre Simbolism</h1>
        <div className='text'>
          <p className='text-lectie'>
            <span className='span-color'>Simbolismul</span> este un curent literar apărut în Franţa, ca reacţie împotriva parnasianismului, a romantismului retoric 
            şi a naturalismului, promovând conceptul de poezie modernă. În concepţia simboliştilor, descripţia rece, parnasiană, 
            ca şi observaţia meticuloasă, naturalistă, urmărind să decupeze “o felie de viaţă”, nu pot surprinde altceva decât o 
            realitate superficială, o lume a aparenţelor. Considerat din perspectiva social-istorică, simbolismul apare ca produs 
            şi expresie a stării de spirit generate de agravarea contradicţiilor societăţii capitaliste de la sfârşitul secolului 
            al XIX-lea.
          </p>
          <p className='text-lectie'>
            Adesea se consideră că poeți ca Charles Baudelaire, Arthur Rimbaud și Paul Verlaine fac parte din acest 
            curent, dar Stephane Mallarmé este cel care îl întruchipează cel mai bine în poezie. S-au impus trei direcții fundamentale: 
            Școala simbolistă, sub patronajul lui Mallarme; Școala decadentă, care se revendică din Baudelaire, având ca reprezentanți 
            pe Paul Verlaine și Arthur Rimbaud; Școala instrumentalistă, susținută de Rene Ghil.
          </p>
          <p className='text-lectie'>
            Termenul de „simbolism” provine din cuvântul grecesc „symbolon”, termen intrat în limbă prin filiera franceză. Simbolul este un 
            substituent, el înlocuiește expresia directă, vorbirea națională, mediind cunoașterea pe calea analogiei și a convenției. O data cu 
            evoluția limbajului, simbolul a devenit tot mai complex, folosindu-se în toate domeniile culturii, iar în literatură este un mod 
            de constituire a imaginii artistice. Simbolul literar concentrează în imagini elemente ale realului cu un grad mai mic sau mai 
            mare de generalizare. Îl vom descoperi în mituri, legende sau folclor. 
          </p>
        </div>
        <div className='navigation'>
          <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia11'>&#8680;</Button>
        </div>
      </div>
    </div>
  )
}

