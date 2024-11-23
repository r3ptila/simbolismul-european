import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

export default function Lectia11() {
  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>
          <p className='text-lectie'>
            Numele curentului a fost dat de poetul Jean Moreas, care în 1886, a publicat un celebru articol-manifest, ”Le symbolisme”, în revista "Le Figaro". În același 
            an s-a constituit gruparea care s-a autointitulat „simbolistă” și în fruntea căreia s-a găsit poetul Stephane Mallarme. Tot atunci,
            Rene Ghil înfiinteaza școala „simbolist-armonistă”, devenită apoi „filozofico-instrumentistă” .Alți poeți de orientare antiparnasiană 
            îl considerau șef de școală pe Paul Verlaine; ei și-au luat, în semn de sfidare, numele de „decadenți”. Reprezentanți de frunte ai 
            decadenților sunt Arthur Rimbaud, Tristan Corbiere, Jules Laforgue. Acești poeți și mulți alții începuseră să scrie cu mult înainte 
            de constituirea gruparilor în care s-au încadrat. Astfel, elemente ale curentului simbolist au luat naștere nu în 1886, ci mult mai 
            devreme, cuprinzând pe toți poetii de orientare antiparnasiană,uniți în efortul de a descoperi esența poeziei.
          </p>
          <p className='text-lectie'>
            Simbolismul pătrunde mai tarziu în tarile europene cu tradiție culturală puternică (Anglia, Spania, Italia), precum și în țările 
            din centrul și sud-estul european unde genereaza școli naționale: simbolism polonez, maghiar, românesc.
          </p>
        </div>
        <div className='navigation'>
            <Button buttonStyle='btn--primary' buttonSize='btn--large' to='/Lectii/Lectia1'>&#8678;</Button>
        </div>
      </div>
    </div>
  )
}

