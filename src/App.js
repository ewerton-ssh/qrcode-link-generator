import './app.css'
import { useState } from "react";

function App() {

  const [qrcode, setQrcode] = useState('');
  const [resultado, setResultado] = useState('');
  const apigoogle = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl='

  function gerarQRCode(e){
    e.preventDefault();
    if (qrcode === '') {
      setResultado('');
      alert('Preencha o campo com uma URL!')
    } else {
      setResultado(apigoogle + qrcode);
    };
  }

  return (

    <div class='Body'>
      
      <div class='Wrapper'>
        <h1 class='Title'>Crie seu QRCode</h1>
          <div class='Input'>
            <input type="text" class="Input-text" placeholder="Cole seu Link aqui!" maxLength='256' value={qrcode} onChange={(e) => setQrcode(e.target.value)} />
            <label for="input" class="Input-label" >URL</label>
          </div>
        <br/>
          <button onClick={gerarQRCode}>Gerar QRCode</button>
        <br/>
          <img src={resultado} id="QRCodeImage" />
      </div>
      
      <footer>&copy; Ewerton Lima</footer>
      </div>
      
  );
}

export default App;