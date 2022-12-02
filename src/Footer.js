import './footer.css';
import Galary from './Galary';
import home from './asset/post-office.png';
import diversity from './asset/diversity.png';
import email from './asset/email.png';
import phone from './asset/phone-message.png';

const Footer = () => {
    return(
        <div className='footer'>
           
            <div className='contact-div'>
                <img src={ home } alt='home' />
                <hr />
                <ul>
                    <li>Area D</li>
                    <li>Plot No 30 Block No S</li>
                    <li>P.O Box 3390</li>
                    <li>Dodoma Tanzania</li>
                </ul>
            </div>
            <div className='contact-div'>
                <img src={ phone } alt='home' />
                <hr />
                <ul>
                    <li>+255 26 235 0019</li>
                    <li>+255 758 700 086</li>
                    <li>+255 764 193 204.</li>
                </ul>
            </div>
            <div className='contact-div'>
                <img src={ email } alt='home' />
                <hr />
                <ul>
                    <li>info@pagt.or.tz</li>
                    <li>info@pagt.or.tz</li>
                </ul>
            </div>
            <div className='contact-div'>
                <img src={ diversity } alt='home' />
                <hr />
                <ul>
                    <li>info@pagt.or.tz</li>
                    <li>info@pagt.or.tz</li>
                </ul>
            </div>
            <Galary />
        </div>
    );
}

export default Footer;