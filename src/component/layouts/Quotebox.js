import React from 'react'

function Quotebox() {
  return (
        <>
            <div className='quote__compo'>
                <div>
                    <div className='quote'>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum ducimus ab, illo voluptas minus nostrum obcaecati,
                        commodi et debitis exercitationem dignissimos labore nulla ratione.
                        Excepturi provident eius recusandae nesciunt itaque!"   
                    </div>
                    <span className='author'>
                            _Author
                    </span>
                </div>
            </div>
            <div className='quote__button'>
                <button>
                    Clipboard
                </button>
                   
                <button>
                    Twitter
                </button>
            </div>
        </>
  )
}

export default Quotebox