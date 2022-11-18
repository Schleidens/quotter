import React from 'react'

function Quotebox(props) {
  return (
        <>
            <div className='quote__compo'>
                <div>
                    <div className='quote'>
                        {props.quote}  
                    </div>
                    <span className='author'>
                            {`_${props.author}`}
                    </span>
                </div>
            </div>
            <div className='quote__button'>
                <div>
                <button>
                    Clipboard
                </button>
                   
                <button>
                    Twitter
                </button>
                </div>
            </div>
        </>
  )
}

export default Quotebox