import { useState } from 'react'

import Quotebox from "./layouts/Quotebox"
import quotes from "../db/quoteDb"

function Homepage() {
  function generateRandomQuote(arr){
    let randomQuote = arr[Math.floor(Math.random() * arr.length)];
    return randomQuote;
    };

  const [quote] = useState(generateRandomQuote(quotes));



  return (
    <div>
        <Quotebox  quote={quote.quote} author={quote.author}/>
    </div>
    
  )
}

export default Homepage