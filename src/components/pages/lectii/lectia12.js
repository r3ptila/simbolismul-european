import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

export default function Lectia12() {
  return (
    <div className='container'>
      <div className='btn-container'>
        <Button buttonStyle='btn--primary' buttonSize='btn--medium' to='/Lectii'>&#8678; Înapoi la Lecții</Button>
      </div>
      <div className='text-container'>
      <h1 className='l-h1'>L2.Teme și Motive</h1>
        <div className='text'>
          <p className='text-lectie'>
            Una dintre temele centrale ale simbolismului este <span className='span-color'>decadența și decadentismul</span>. Scriitorii și poeții simboliști au fost fascinați 
            de fragilitatea și instabilitatea lumii și a individului în fața trecerii timpului sau a condițiilor sociale. Ei au explorat 
            adesea ideea că tot ce este frumos și pur este inevitabil supus degradării și coruperii într-o lume marcată de efemeritate.
          </p>
          <p className='text-lectie'>
            În plus, simbolismul se ocupă frecvent de relația între <span className='span-color'>vis și realitate</span>. Scriitorii simboliști au fost interesați de explorarea 
            laturii subconștiente a psihicului uman și de utilizarea imaginilor și simbolurilor pentru a exprima stări emoționale profunde 
            și trăiri interioare. Astfel, realitatea fizică poate fi distorsionată sau reinterpretată prin intermediul simbolurilor, oferind 
            cititorului o nouă perspectivă asupra lumii.
          </p>
          <p className='text-lectie'>
            <span className='span-color'>Misticismul și spiritualitatea</span> sunt alte teme frecvente în literatura simbolistă. Scriitorii și poeții simboliști au fost adesea 
            fascinați de aspectele mistice și spirituale ale existenței umane, căutând să exploreze idei despre transcendență și experiențe 
            spirituale prin intermediul simbolurilor religioase sau mitologice.
          </p>
          <p className='text-lectie'>
            <span className='span-color'>Natura și cosmicul</span> sunt, de asemenea, motive importante în literatura simbolistă. Peisajele naturale și cosmosul sunt adesea prezente 
            în operele simboliștilor ca simboluri ale subconștientului sau ale aspectelor mai profunde ale existenței umane. Aceste motive pot fi 
            utilizate pentru a sublinia legăturile dintre om și natură sau pentru a exprima idei despre ordinea cosmică și eternitatea.
          </p>
          <p className='text-lectie'>
            <span className='span-color'>Culorile și lumina</span> sunt alte elemente simboliste importante. Ele pot fi folosite pentru a exprima stări emoționale sau pentru a 
            simboliza idei abstracte, cum ar fi puritatea, frumusețea sau decadentismul. Culorile și lumina pot fi utilizate pentru a crea 
            atmosfere și pentru a sublinia anumite aspecte ale operei, contribuind la înțelegerea profundă a mesajului simbolic.
          </p>
        </div>
      </div>
    </div>
  )
}

