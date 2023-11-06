import { useState } from 'react';
import './App.css';
import axios from 'axios';


const URL = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_gKBJG2CcrGmriJrbzHR2XGsXBdmMtmyTq2x3y17U"
function App() {

  const [eur, setEur] = useState(0);
  const [gbp, setGbp] = useState(0);
  const [rate, setRate] = useState('');

const calculate = (e) => {
  e.preventDefault();
  axios.get(URL)
  .then((response) => {
    const json = response.data
    setRate(json.data.GBP);
    setGbp(eur * json.data.GBP)
  } ).catch (error => {
    alert(error)
  })
  }

  return (
   <div id="container">
     <form onSubmit={calculate}>
      <div id='eur'>
      <label>EURO:  </label>
        <input type='number' step='0.01' value={eur} onChange={e => setEur(e.target.value)}/>
       <br></br>
        <output> Rate: {rate}</output>
      </div>
      <div id='gbp'>
      <label>GBP:  </label>
        <output>{gbp.toFixed(2)} €</output>
      </div>
      <div id='calc'>
        <button>Calculate</button>
      </div>
      </form>
   </div>
  );
}
export default App;