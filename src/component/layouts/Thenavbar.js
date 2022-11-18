import {Link} from 'react-router-dom';

function Thenavbar() {
  return (
    <div className='navbar'>
        <span className='text__logo'>
            <Link to="/">
                Quotter
            </Link>
        </span>
        <div className='menu'>
            <ul>
                <li>
                    <Link to="/About">
                        About
                    </Link>
                </li>
                <li>
                   <a href="https://github.com/Schleidens/quotter" target="blank">
                        Github
                   </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Thenavbar