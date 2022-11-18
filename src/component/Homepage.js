import { useState } from 'react'

import Quotebox from "./layouts/Quotebox"
import quotes from "../db/quoteDb"

function Homepage() {
  function generateRandomQuote(arr){
    let randomQuote = arr[Math.floor(Math.random() * arr.length)];
    return randomQuote;
    };

  const [quote, setQuote] = useState(generateRandomQuote(quotes));
  const [copied, setCopied] = useState(false)

  const quoteForCopy = `${quote.quote}  _${quote.author}`

  const copyQuote = () =>{
    navigator.clipboard.writeText(quoteForCopy)
    setCopied(true);
    setInterval(function(){
      setCopied(false)
    }, 3000)
  }

  const generateNewQuote = () =>{
    setQuote(generateRandomQuote(quotes));
  }



  return (
    <div>
        <Quotebox  quote={quote.quote} author={quote.author} copyQuote={copyQuote} generateNewQuote={generateNewQuote}/>
        <div className='copied__box'>
        {copied ? <span className='copied'>Copied To Clipboard !!!</span> : ""}
        </div>
    </div>
    
  )
}

export default Homepage