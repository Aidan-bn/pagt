import './social.css';
import fb from './asset/facebook.svg';
import tw from './asset/twitter.png'

function Social() {
    return (
        <div className='social'>
            <ul className='ul-social'>
                <li className='li-social'><img src={ fb } alt="facebook"  className='img-media'/></li>
                <li className='li-social'><img src={ tw } alt="facebook"  className='img-media'/></li>
                <li className='li-social'>WAP</li>
            </ul>
        </div>
    );
}

export default Social;