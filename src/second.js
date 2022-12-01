import './second.css';
import askofu from './asset/askofu.png';
import faida from './asset/faida.png';
import rutonda from './asset/rutonda.png';
import kanyika from './asset/kanyika.png';
import philipo from './asset/philipo.png';

function Second() {
    return (
        <div className='second'>
            <h1>VIONGOZI WAKUU</h1>
            <div className='top'>
                <div className='outer'>
                    <div className='card'>
                            <div className='cardImg'>
                                <div>
                                    <img src= { askofu } alt="Askofu Mkuu" />
                                </div>
                            </div>
                            <div className='overlay'></div>
                            <div className='desc'>
                                <h4>REV. DKT. DANIEL A. ALLEY</h4>
                                <h5>Askofu Mkuu Wa PAG(T)</h5>
                                <p><strong>"Yeremia 33:3" </strong><br />"Niite, nami nitakuitikia na kukuonyesha mambo makubwa yaliyo fichika ambayo hujapata kuyajua"</p>
                            </div>
                        </div>
                    </div>
            </div>
            <div className='bottom'>
            <div className='outer'>
                    <div className='card'>
                        <div className='cardImg'>
                            <div>
                                <img src= { faida } alt="Makamu Askofu Mkuu" />
                            </div>
                        </div>
                        <div className='overlay'></div>
                        <div className='desc'>
                            <h4>REV. THOMAS Y. FAIDA</h4>
                            <h5>Makamu Askofu Mkuu</h5>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='cardImg'>
                            <div>
                                <img src= { rutonda } alt="Katibu Mkuu" />
                            </div>
                        </div>
                        <div className='overlay'></div>
                        <div className='desc'>
                            <h4>REV: SHUKRANI W. RUTONDA</h4>
                            <h5>Katibu Mkuu</h5>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='cardImg'>
                            <div>
                              <img src= { kanyika } alt="Makamu Katibu Mkuu" />
                            </div>
                        </div>
                        <div className='overlay'></div>
                        <div className='desc'>
                            <h4>REV: CHARLES M. KANYIKA</h4>
                            <h5>Naibu Katibu Mkuu</h5>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='cardImg'>
                            <div>
                                <img src= { philipo } alt="Askofu Mkuu" />
                                
                            </div>
                        </div>
                        <div className='overlay'></div>
                        <div className='desc'>
                            <h4>EV: PHILIP S. AMOS</h4>
                            <h5>Afisa Utawala na Fedha</h5>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Second;