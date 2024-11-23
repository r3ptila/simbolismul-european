import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

export default function Lectia2() {
  return (
    <div className='container'>
      <div className='btn-container'>
        <Button buttonStyle='btn--primary' buttonSize='btn--medium' to='/Lectii'>&#8678; Înapoi la Lecții</Button>
      </div>
      <div className='text-container'>
      <h1 className='l-h1'>L3.Trăsături</h1>
        <div className='text'>
          <p className='text-lectie'>
            <span className='span-color'>1. Sugestia:</span> simbolul se realizează prin sugestie, de aceea Baudelaire numea poezia „o specie de vrăjitorie evocatoare”. 
            Rolul sugestiei în realizarea simbolurilor este foarte mare. Mallarme susţine că „a numi un obiect este a suprima trei 
            sferturi din plăcerea poemului” şi adaugă „a sugera, iată visul!”. Urmând acest principiu, poeţii simbolişti nu descriu, 
            nu narează, nu relatează. Ei resping anacdotica, fabula, reportajul.
          </p>
          <p className='text-lectie'>
            <span className='span-color'>2. Prozodia:</span> Marea inovație a simboliştilor în materie de prozodie o constituie folosirea versului liber. 
            Versul clasic apare multor simbolişti ineficient, rima este considerată o simplă convenţie, de aceea ei ajung 
            la concluzia că strofa asimetrică, cu versificație liberă, în ritm variabil, corespunde muzicii interioare. 
            Versul liber, susţin simboliştii, produce efecte muzicale deosebite. Se folosesc refrenul, laitmotivul, armonia, 
            asonanțele, rima şi ritmurile elaborate
          </p>
          <p className='text-lectie'>
          <span className='span-color'>3.Cultivarea sinesteziilor:</span> Sinestezia este o figură de stil prin care se pun în relaţie realităţi receptate de simţuri 
            diferite ( auz – văz, auz – miros: „Primăvară – o pictură parfumată cu vibrări de violet” ).
          </p>
          <p className='text-lectie'>
          <span className='span-color'>4. Muzicalitatea:</span> simboliştii pledează pentru muzicalitatea versurilor, ca mijloc de obţinere a inefabilului, a sugestiei: 
            „muzica înainte de toate” (Verlaine ), „arta versurilor este arta muzicii” ( Al. Macedonski ).
          </p>
          <p className='text-lectie'>
            <span className='span-color'>5. Corespondenţele:</span> sunt un mod de sondare, de luminare a zonelor ascunse ale realităţii. Ideea fundamentală a simbolismului
            constă în exprimarea unor raporturi între eul poetului (universul mic) şi lume (universul mare) care se traduc la nivelul 
            receptivităţii prin simboluri. Ele tind să exprime relaţiile ce există, pe baza unor afinităţi secrete, între părţile 
            componente ale totului cosmic. În categoria corespondenţelor intră şi analogiile dintre senzaţii, emoţii, imagini de 
            naturi diferite.
          </p>
        </div>
      </div>
    </div>
  )
}

