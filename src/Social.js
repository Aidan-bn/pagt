import './social.css';
import fb from './asset/facebook.svg';
import tw from './asset/twitter.svg';
import yt from './asset/youtube.svg';
import wp from './asset/mob.svg';

function Social() {
    return (
        <div className='social'>
            <ul className='ul-social'>
                <li className='li-social'><img src={ fb } alt="facebook"  className='img-media'/></li>
                <li className='li-social'><img src={ tw } alt="twitter"  className='img-media'/></li>
                <li className='li-social'><img src={ yt } alt="youtube"  className='img-media'/></li>
                <li className='li-social'><img src={ wp } alt="Whatsapp"  className='img-media'/></li>
            </ul>
        </div>
    );
}

export default Social;