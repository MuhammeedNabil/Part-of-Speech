import React from 'react'
import { Link } from 'react-router-dom'

export default function Study() {
  return (
    <>
     <div className="row h-50 bg-white p-5 m-auto justify-content-between align-items-center overflow-auto">
  {/* --------------------------------------Title & back home button-------------------------------- */}  
<div className="row">
<Link to={"/home"} className='col-md-1 d-flex justify-content-center align-items-center'><button className='border border-0 bg-transparent fs-5 text-start='><i className="fa-solid fa-circle-left"></i></button></Link>
<h1 className='text-center mb-3 col-md-11'>Study</h1>
</div>
<hr />

  {/* --------------------------------------Adverb Explanation-------------------------------- */}  
<div className="adverb">
<h4 className='d-inline'>Adverb :</h4> 
<p className='d-inline'> An adverb is a word that modifies (describes) a verb (he sings loudly), an adjective (very tall), another adverb (ended too quickly), or even a whole sentence (Fortunately, I had brought an umbrella). Adverbs often end in –ly, but some (such as fast) look exactly the same as their adjective counterparts.
<ul>Examples:
<li>Tom Longboat did not run <span className='fw-bold'>badly</span>.</li>
<li>Tom is <span className='fw-bold'>very</span> tall.</li>
<li>The race finished <span className='fw-bold'>too</span> quickly.</li>
<li><span className='fw-bold'>Fortunately</span>, Lucy recorded Tom’s win.</li>
</ul>
It’s easy to identify adverbs in these sentences</p>
</div>
<hr  className='mt-3'/>

  {/* --------------------------------------verb Explanation-------------------------------- */}  
  <div className="verb">
<h4 className='d-inline'>Verb :</h4> 
<p className='d-inline'> Want to know where all the action is? Verbs! Verbs are words that represent actions that are external (run, jump, work) and internal (love, think, consider). Without verbs, you can’t do anything, you can’t feel anything—you can’t even be anything. 
<ul>Examples:
<li>I <span className='fw-bold'>work</span> at a factory.</li>
<li>Cats <span className='fw-bold'>chase</span> mice.</li>
<li>We <span className='fw-bold'>listened</span> to the woman’s amazing story.</li>
</ul>
</p>
</div>
<hr  className='mt-3'/>

  {/* --------------------------------------noun Explanation-------------------------------- */}  
  <div className="noun">
<h4 className='d-inline'>Noun :</h4> 
<p className='d-inline'> Nouns make up the largest class of words in most languages, including English. A noun is a word that refers to a thing
<ul>Examples:
<li>a person <span className='fw-bold'>(Noah Webster)</span></li>
<li>an animal <span className='fw-bold'>(cat)</span></li>
<li>a place <span className='fw-bold'>(Omaha)</span></li>
<li>a quality <span className='fw-bold'>(softness)</span></li>
</ul>
It's usually a single word, but not always: <span className='fw-bold'>cake, shoes, school bus, and time and a half</span>  are all nouns.</p>
</div>
<hr  className='mt-3'/>

 {/* --------------------------------------adjective Explanation-------------------------------- */}  
 <div className="adjective">
<h4 className='d-inline'>Adjective :</h4> 
<p className='d-inline'> Adjectives are words that describe the qualities or states of being of nouns: enormous, doglike, silly, yellow, fun, fast. They can also describe the quantity of nouns: many, few, millions, eleven.
<span>Adjectives modify nouns</span>
Most students learn that adjectives are words that modify (describe) nouns. Adjectives do not modify verbs or adverbs or other adjectives.
<ul>Examples:
<li>Margot wore a <span className='fw-bold'>beautiful</span> hat to the pie-eating contest.</li>
<li><span className='fw-bold'>Furry</span> dogs may overheat in the summertime.</li>
<li>My cake should have <span className='fw-bold'>sixteen</span> candles.</li>
<li>The<span className='fw-bold'> scariest</span> villain of all time is Darth Vader.</li>
</ul>
In the sentences above, the adjectives are easy to spot because they come immediately before the nouns they modify.</p>
</div>
<hr  className='mt-3'/>

      </div>
    </>
  )
}
