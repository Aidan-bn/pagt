import './majimbo.css';
import arusha from './asset/philipo.png'

function Majimbo() {
    const jimboLink = document.getElementById('arusha');
    // jimboLink.addEventListener('click', () => {
    //     // console.log('Hewalaah');
    // });

    return(
        <div className='jimbo'>
            <ul className='jimbo-links'>
                <li className='li-jimbo-links' id='arusha'><a href='/'>Arusha</a></li>
                <li className='li-jimbo-links'><a href='/'>Arusha</a></li>
                <li className='li-jimbo-links'><a href='/'>Arusha</a></li>
                <li className='li-jimbo-links'><a href='/'>Arusha</a></li>
            </ul>
            <div id='arusha'>
                <ul className='ul-jimbo'>
                    <li className='li-jimbo'>
                        <img src={ arusha } alt='Askofu wa Arusha' />
                        <h6>Askofu Jina Langu</h6>
                    </li>
                    <li className='li-jimbo-description'>
                    Jimbo la Arusha (Arusha na Kilimanjaro), Jimbo la Dar es Salaam (Dar es Salaam, Lindi, 
                    Pwani na Zanzibar ), Jimbo la 6 Dodoma, Jimbo la Geita, Jimbo la Iringa 
                    (Iringa, Njombe na Ruvuma), Jimbo la Kagera, Jimbo la Kigoma, Jimbo la Manyara 
                    (Manyara na Singida), Jimbo la Mara, Jimbo la Mbeya (Mbeya, Rukwa, na Songwe), 
                    Jimbo la Morogoro, Jimbo la Mwanza, Jimbo la Shinyanga, Jimbo la Simiyu, 
                    Jimbo la Tabora, na Jimbo la Tanga. Majimbo haya yote yanaongozwa na maaskofu 
                    ambao pia huchaguliwa kila baada ya miaka mitano. Maaskofu hawa wamekasimishwa 
                    madaraka ya kusimamia wilaya zote katika majimbo 
                    yao husika ikiwa ni pamoja kuwa wenyeviti wa mikutano yote ya kijimbo na mkutano mkuu wa jimbo.
                    </li>
                </ul>
            </div>

            <div id='arusha'>
                <ul className='ul-jimbo'>
                    <li className='li-jimbo'>
                        <img src={ arusha } alt='Askofu wa Arusha' />
                        <h6>Askofu Jina Langu</h6>
                    </li>
                    <li className='li-jimbo-description'>
                    Jimbo la Arusha (Arusha na Kilimanjaro), Jimbo la Dar es Salaam (Dar es Salaam, Lindi, 
                    Pwani na Zanzibar ), Jimbo la 6 Dodoma, Jimbo la Geita, Jimbo la Iringa 
                    (Iringa, Njombe na Ruvuma), Jimbo la Kagera, Jimbo la Kigoma, Jimbo la Manyara 
                    (Manyara na Singida), Jimbo la Mara, Jimbo la Mbeya (Mbeya, Rukwa, na Songwe), 
                    Jimbo la Morogoro, Jimbo la Mwanza, Jimbo la Shinyanga, Jimbo la Simiyu, 
                    Jimbo la Tabora, na Jimbo la Tanga. Majimbo haya yote yanaongozwa na maaskofu 
                    ambao pia huchaguliwa kila baada ya miaka mitano. Maaskofu hawa wamekasimishwa 
                    madaraka ya kusimamia wilaya zote katika majimbo 
                    yao husika ikiwa ni pamoja kuwa wenyeviti wa mikutano yote ya kijimbo na mkutano mkuu wa jimbo.
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Majimbo;