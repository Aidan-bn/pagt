import { useState } from 'react';
import './majimbo.css';
import arusha from './asset/philipo.png'
// import './plain.js';
import Footer from './Footer';

function Majimbo() {

    // const[isActive, setIsActive] = useState(false);
    // const handleClick = event => {
    //     setIsActive(current => !current);
    // };

    // const changeJimbo = () => {
    //    alert('Habari gani');
    // };

    // const altaNate = event => {
    //     event.currentTarget.classList.add('red');
    //     event.currentTarget.classList.remove('red');
    //     event.currentTarget.classList.toggle('red');
    // }

    // const alter = document.getElementById('dar');
    // alter.addEventListener('click', () => {
    //     // console.log("Hello");
    // });

    const [show, setShow] = useState(true);
    
    return(
        <div className='jimbo'>
            {
                show?<li className='li-jimbo-links' id='dar' onClick={()=>setShow(true)}><a href='/'>Dar</a></li>:null
            }
           
            <button onClick={()=>setShow(true)}>show</button>
            <button onClick={()=>setShow(false)}>hide</button>
            <ul className='jimbo-links'>
                {/* <li className='li-jimbo-links' id='arusha' onClick={changeJimbo}
                ><a href='/'>Arusha</a></li>
                <li className={isActive ? 'blue' : ''} onClick={handleClick} ><a href='/'>Arusha</a></li> */}
                <li className='li-jimbo-links' id='dar' onClick={()=>setShow(true)}><a href='/'>Dar</a></li>
                <li className='li-jimbo-links' onClick={()=>setShow(false)}><a href='/'>Dodoma</a></li>
                <li className='li-jimbo-links' onClick={()=>setShow(true)}><a href='/'>Morogoro</a></li>
                <li className='li-jimbo-links' onClick={()=>setShow(false)}><a href='/'>Manyara</a></li>
                <li className='li-jimbo-links' onClick={()=>setShow(false)}><a href='/'>Mwanza</a></li>
                <li className='li-jimbo-links' onClick={()=>setShow(false)}><a href='/'>Kigoma</a></li>
                <li className='li-jimbo-links' onClick={()=>setShow(false)}><a href='/'>Tanga</a></li>
                <li className='li-jimbo-links' onClick={()=>setShow(false)}><a href='/'>Tabora</a></li>
                {/* <li className='li-jimbo-links'><a href='/'>Shinyanga</a></li>
                <li className='li-jimbo-links'><a href='/'>Simiyu</a></li>
                <li className='li-jimbo-links'><a href='/'>Kagera</a></li>
                <li className='li-jimbo-links'><a href='/'>Mbeya</a></li>
                <li className='li-jimbo-links'><a href='/'>Iringa</a></li>
                <li className='li-jimbo-links'><a href='/'>Geita</a></li>
                <li className='li-jimbo-links'><a href='/'>Mara</a></li> */}
            </ul>
            
            <div className='jimbo-name'>
            <li className='li-jimbo-links' id='dar' onClick={()=>setShow(true)}><a href='/'>Dar</a></li>
                {
                    show?
                    <ul className='ul-jimbo' id='arusha'>
                    <li className='li-jimbo'>
                        <img src={ arusha } alt='Askofu wa Arusha' />
                        <h3>Askofu Jina Langu</h3>
                    </li>
                    <li className='li-jimbo-description'>
                    Jimbo la Arusha (Arusha na Kilimanjaro), Jimbo la Dar es Salaam (Dar es Salaam, Lindi, 
                    Pwani na Zanzibar ), Jimbo la 6 Dodoma, Jimbo la Geita, Jimbo la Iringa 
                    (Iringa, Njombe na Ruvuma), Jimbo la Kagera, Jimbo la Kigoma, Jimbo la Manyara 
                    (Manyara na Singida), Jimbo la Mara, Jimbo la eita (Mbeya, Rukwa, na Songwe), jimbo.
                    </li>
                </ul>
                :null
                }
                

                {
                    show?
                    <ul className='ul-jimbo' id='arusha'>
                    <li className='li-jimbo'>
                        <img src={ arusha } alt='Askofu wa Arusha' />
                        <h3>Askofu Tuntufye</h3>
                    </li>
                    <li className='li-jimbo-description'>
                    Jimbo la Arusha (Arusha na Kilimanjaro), Jimbo la Dar es Salaam (Dar es Salaam, Lindi, 
                    Pwani na Zanzibar ), Jimbo la 6 Dodoma, Jimbo la Geita, Jimbo la Iringa 
                    (Iringa, Njombe na Ruvuma), Jimbo la Kagera, Jimbo la Kigoma, Jimbo la Manyara 
                    (Manyara na Singida), Jimbo la Mara, Jimbo la eita (Mbeya, Rukwa, na Songwe), jimbo.
                    </li>
                </ul>
                :null
                }

{
                    show?
                    <ul className='ul-jimbo' id='arusha'>
                    <li className='li-jimbo'>
                        <img src={ arusha } alt='Askofu wa Arusha' />
                        <h3>Askofu </h3>
                    </li>
                    <li className='li-jimbo-description'>
                    Jimbo la Arusha (Arusha na Kilimanjaro), Jimbo la Dar es Salaam (Dar es Salaam, Lindi, 
                    Pwani na Zanzibar ), Jimbo la 6 Dodoma, Jimbo la Geita, Jimbo la Iringa 
                    (Iringa, Njombe na Ruvuma), Jimbo la Kagera, Jimbo la Kigoma, Jimbo la Manyara 
                    (Manyara na Singida), Jimbo la Mara, Jimbo la eita (Mbeya, Rukwa, na Songwe), jimbo.
                    </li>
                </ul>
                :null
                }
            </div>
            <Footer />
        </div>
    );
}

export default Majimbo;