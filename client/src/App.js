import './App.css';
import Dice from './Dice';
import {useState} from 'react';

function App() {

  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [dice3, setDice3] = useState(1);
  const [line1, setLine1] = useState();
  const [line2, setLine2] = useState();
  const [line3, setLine3] = useState();
  const [line4, setLine4] = useState();
  const [line5, setLine5] = useState();
  const [line6, setLine6] = useState();
  const [line7, setLine7] = useState();
  const [result, setResult] = useState();

  const getNbr = () => {
    return Math.floor((Math.random() * 6) + 1);
  }

  const rollDice = () => {

    const d1 = getNbr();
    const d2 = getNbr();
    const d3 = getNbr();

    setDice1(d1);
    setDice2(d2);
    setDice3(d3);

    const n = d1 * 2;
    setLine1(`${d1} * 2 = ${n}`);

    let n2 = n + 5;
    setLine2(`${n} + 5 = ${n2}`);

    let n3 = n2 * 5;
    setLine3(`${n2} * 5 = ${n3}`);

    let n4 = n3 + d2;
    setLine4(`${n3} + ${d2} = ${n4}`);

    let n5 = n4 * 10;
    setLine5(`${n4} * 10 = ${n5}`);

    let n6 = n5 + d3;
    setLine6(`${n5} + ${d3} = ${n6}`);

    let n7 = n6 - 250;
    setLine7(`${n6} - 250 = ${n7}`);

    const res = `${n7}`.split('');
    setResult(res);
    console.log(res);

  }

  const showResult = true;

  return (
    <div className="EasterEgg Wrapper">
      <h2>Dice Roll Trick</h2>
      <div className="DiceBox">
        <Dice nbr={dice1} className="dice" />
        <Dice nbr={dice2} className="dice" />
        <Dice nbr={dice3} className="dice" />
      </div>
      <button onClick={e => rollDice()} className="btn btn-primary">Roll Dice</button>
      <br/>
      <hr/>
      {result && <div>
        <b>Steps:</b><br />
        <ol>
          {line1 && <li>Multiply dice #1 by 2<br />{showResult && line1}</li>}
          {line2 && <li>Take that number and add 5<br />{showResult && line2}</li>}
          {line3 && <li>Take that number and multiply by 5<br />{showResult && line3}</li>}
          {line4 && <li>Take that number and add dice #2<br />{showResult && line4}</li>}
          {line5 && <li>Take that number and multiply by 10<br />{showResult && line5}</li>}
          {line6 && <li>Take that number and add dice #3<br />{showResult && line6}</li>}
          {showResult && line7 && <li>Take that number and subtract 250<br />{line7}</li>}
          {!showResult && <li>Now share that number with the magician</li>}
        </ol>
      </div>
      }

      {showResult && result && <div>Now, what is the answer.. {result[0]}&nbsp;{result[1]}&nbsp;{result[2]}<br />This trick works every time!<br /><br /></div>}


      
    </div>
  );
}

export default App;
