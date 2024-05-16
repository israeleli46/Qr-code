import './App.css';
import qrCodeUrl from './image-qr-code.png'

function App() {
  return (
    <div className='page'> 
    <div className='bloc'>
    <div className="App">
      <section className='img'>
        <img src={qrCodeUrl} alt='qr code' width={190}/>
      </section>
      <section className='text'>
      <h4> Improve your front-end skills by building projects </h4>
      <h6>Scan the Qr code to visit Frontend<br/> Mentor and take your coding skill<br/> to next level</h6>
      </section>
    </div>
    </div>
    </div>
  );
}

export default App;
