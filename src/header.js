import logopag from './asset/logopag.png';
import './header.css';

function Header(){
    return(
        <header>
            <div className='logo'>
                <img src={logopag} alt='img logo' className='logo-pag'></img>
            </div>
            <nav>
                <ul className='nav-ul'>
                    <li className='nav-li'>Mwanzo</li>
                    <li className='nav-li'>Kanuni</li>
                    <li className='nav-li'>Idara</li>
                    <li className='nav-li'>Majimbo</li>
                    <li className='nav-li'>Wasiliana</li>
                </ul>
                <div className='hamburger'>
                    <ul className='ul-hamburger'>
                        <li className='img-hamburger'>Img</li>
                        <li className='cross-hamburger'>X</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;
