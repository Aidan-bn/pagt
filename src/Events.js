import './events.css';

function Events() {
    return (
        <div className='events'>
            <ul className='ul-events'>
                <li className='li-events'>
                    <h4>Viunganishi</h4>
                    <a href='/'>Katiba</a><br />
                    <a href='/'>Mpango Mkakati</a><br />
                    <a href='/'>Mfumo wa (CMS)</a><br />
                    <a href='/'>Ripoti</a><br />
                </li>
                <li className='contact'>
                <form>
                    <label>Jina: </label>
                    <input type="text" className="name" id="name" required placeholder='Andika jina lako ..'></input>
                    <label>BaruaPepe: </label>
                    <input type="text" className="email" id="email" required placeholder='Andika baru pepe ..'></input>
                    <label>Ujumbe: </label>
                    <textarea className='message' id='message' required placeholder='Weka ujumbe wako ...'/>
                    <button className='submit'>Tuma</button>
                </form>
                </li>
            </ul>
        </div>
    );
};

export default Events;
