import { useState } from 'react'

import Quotebox from "./layouts/Quotebox"
import quotes from "../db/quoteDb"

function Homepage() {
  function generateRandomQuote(arr){
    let randomQuote = arr[Math.floor(Math.random() * arr.length)];
    return randomQuote;
    };

  const [quote, setQuote] = useState(generateRandomQuote(quotes));

  const quoteForCopy = `${quote.quote}  _${quote.author}`

  const copyQuote = () =>{
    navigator.clipboard.writeText(quoteForCopy)
  }

  const generateNewQuote = () =>{
    setQuote(generateRandomQuote(quotes))
  }



  return (
    <div>
        <Quotebox  quote={quote.quote} author={quote.author} copyQuote={copyQuote} generateNewQuote={generateNewQuote}/>
    </div>
    
  )
}

export default Homepage