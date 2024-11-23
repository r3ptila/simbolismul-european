import React from 'react'
import '../../../App.css'
import './css/lectie.css'
import { Button } from '../../Button'

export default function Lectia4() {
  return (
    <div className='container'>
      <div className='btn-container'>
        <Button buttonStyle='btn--primary' buttonSize='btn--medium' to='/Lectii'>&#8678; Înapoi la Lecții</Button>
      </div>
      <div className='text-container'>
      <h1 className='l-h1'>L5.Simbolismul Românesc</h1>
        <div className='text'>
          <p className='text-lectie'>
            În literatura română, simbolismul a început să-și facă simțită prezența în special prin contribuțiile remarcabile ale unor figuri 
            literare de seamă la sfârșitul secolului al XIX-lea. Unul dintre principalii promotori ai acestei mișcări în România a fost Alexandru 
            Macedonski, al cărui impact a fost profund atât în poezie, cât și în texte teoretice. Prin poemele sale și prin scrierile sale 
            teoretice, Macedonski a deschis calea către o nouă estetică literară, care îmbrățișa simbolismul ca modalitate de exprimare artistică.
          </p>
          <p className='text-lectie'>
            Alți reprezentanți importanți ai simbolismului românesc includ nume precum Ștefan Petică, Ion Minulescu și, în special, 
            George Bacovia. Bacovia este adesea considerat una dintre cele mai distinse voci ale simbolismului românesc. El a reușit 
            să îmbine elementele specifice simbolismului cu o estetică personală distinctă, creând o poezie profundă și tulburătoare, 
            care a explorat adâncimile metafizice ale existenței umane. Poeziile sale sunt adesea caracterizate de o atmosferă misterioasă 
            și melancolică, cu nuanțe expresioniste sau existențialiste, reflectând uneori starea de alienare și de izolare a individului 
            într-o lume în derivă.
          </p>
          <p className='text-lectie'>
            Interesant este faptul că Alexandru Macedonski însuși și-a revendicat ulterior, în anul 1889, într-un articol intitulat “În pragul 
            secolului”, merite de pionier al simbolismului pe plan european. Acest gest subliniază importanța pe care o acorda Macedonski noii 
            direcții literare și artistice pe care o promova și contribuția sa semnificativă la evoluția simbolismului nu doar în cadrul 
            literaturii române, ci și la nivel european.
            <br />Cele patru etape ale simbolismului românesc sunt:
          </p>
          <ul>
            <li>Etapa căutărilor: Al. Macedonski, Tudor Arghezi</li>
            <li>Direcția pseudosimbolistă: ”Viața nouă” de Ovid Densusianu, poezia citadină</li>
            <li>Simbolismul exterior: Ion Minulescu, modalități noi de expresie</li>
            <li>Simbolismul autentic bacovian: George Bacovia – în volumele ”Plumb”, ”Scântei galbene” promovează poezii ale tristeții</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

