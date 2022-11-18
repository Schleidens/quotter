import React from 'react'

function About() {

  document.title = "Quotter | About";

  return (
    <>
        <div className="about__box">
          <div>
            <b>Quotter</b> is programming quote generator website <br />
             Project made with &#9829; by <a href="https://github.com/Schleidens">Schleidens</a>
             <div className='about__links'>
                &#128073;
                <a href="https://twitter.com/schleidens_dev" target="blank">Follow on twitter</a>  |   
                <a href="https://github.com/Schleidens" target="blank" >Follow on Github</a>
              </div>  
          </div>
        </div>
    </>
  )
}

export default About