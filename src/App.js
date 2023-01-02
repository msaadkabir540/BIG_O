import React, { useState } from 'react';
import './App.css';
import Image from './components/Image';
import Image1 from './components/Image1';
import Image2 from './components/Image2';


function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isClose, setIsClose] = useState(true);
  const [isToggle, setIsToggle] = useState(true);
  return (
    <>
      <div className="App">
        <header className="App-header">
          {isOpen ? <Image1 /> : null}
          {isClose ? <Image2 /> : null}
          {isToggle ? <Image /> : null}
        </header>
        <div className='btn-Img-main'>
            <div>
              <ul className=''>
                <li>Whatsapp Logo</li>
                <li>Whatsapp Black logo</li>
                <li>Whatsapp Dark logo</li>
              </ul>
            </div>
          <div className='btn-inner'>

            <div >
              <button className='btn-Img' >Image 1 <input type="checkbox" className='checkbox'  onClick={() => setIsOpen(!isOpen)}/></button>
           
            </div>
            <div>
              <button className='btn-Img' >Image 2  <input type="checkbox" className='checkbox'  onClick={() => setIsClose(!isClose)}/></button>
            </div>
            <div>
              <button className='btn-Img' >Image 3 <input type="checkbox" className='checkbox'  onClick={() => setIsToggle(!isToggle)}/></button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
