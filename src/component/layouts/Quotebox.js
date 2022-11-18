import React from 'react'

function Quotebox(props, generateNewQuote) {

  return (
        <>
            <div className='quote__compo'>
                <div>
                    <div className='quote'>
                        {`"${props.quote}"`}  
                    </div>
                    <span className='author'>
                            {`_${props.author}`}
                    </span>
                </div>
            </div>
            <div className='quote__button'>
                <div>
                <button className='space__me'>
                    Clipboard
                </button>
                   
                <button>
                    <a href={`https://twitter.com/intent/tweet?text=${props.quote}  _${props.author}`} target="blank">
                        Twitter
                    </a>
                </button>
                </div>

                <span>
                    <button onClick={props.generateNewQuote}>
                        generateNewQuote
                    </button>
                </span>
            </div>
        </>
  )
}

export default Quotebox