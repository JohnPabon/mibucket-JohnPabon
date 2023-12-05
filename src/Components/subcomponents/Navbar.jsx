import './../../css/navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className='navbar'>
            <div className='navbar__info'>
                <p>Foods</p>
            </div>
            <div className='navbar__links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/service'>Service</Link>
                <Link to='/'>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;