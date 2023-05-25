import {useState} from "react";
import './App.css';

import difference from 'set.prototype.difference';
import union from "set.prototype.union";
import intersection from "set.prototype.intersection";
import symmetricDifference from "set.prototype.symmetricdifference";
import isDisjointFrom from "set.prototype.isdisjointfrom";
import isSubsetOf from "set.prototype.issubsetof";
import isSupersetOf from "set.prototype.issupersetof";

function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operation, setOperation] = useState('u');
  const [result, setResult] = useState("");
  
  const handleNumber1Change = (event) => {
    setNumber1(event.target.value);
  }
  
  const handleNumber2Change = (event) => {
    setNumber2(event.target.value);
  }
  
  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  }
  
  const stringToSet = (str) => {
    const arr = str.split(' ');
    
    const set = new Set();
    for (const item of arr) {
      set.add( parseInt(item) )
    }
    
    return set;
  }
  
  const calculateResult = () => {
    const set1 = stringToSet(number1);
    const set2 = stringToSet(number2);
    
    switch (operation) {
      case 'u':
        setResult( Array.from(union(set1, set2)).join(' '));
        break;
      case 'd':
        setResult( Array.from(difference(set1, set2)).join(' '));
        break;
      case 'i':
        setResult( Array.from(intersection(set1, set2)).join(' '));
        break;
      case 'sD':
        setResult( Array.from(symmetricDifference(set1, set2)).join(' '));
        break;
      case 'df':
        setResult( isDisjointFrom(set1, set2) ? 'Yes' : 'No' );
        break;
      case 'sub':
        setResult( isSubsetOf(set1, set2) ? 'Yes' : 'No');
        break;
      case 'sup':
        setResult( isSupersetOf(set1, set2) ? 'Yes' : 'No');
        break;
      default:
        setResult("");
    }
  };
  
  return (
    <div className="calculator-container">
      <div className="about">
        <h3>Прізвище, імʼя: Чиндарьов Євгеній</h3>
        <h4>Напрямок, за яким планує розвиватись: Front end, back end</h4>
        <h5>
          Front end — це  інтерфейс для взаємодії між користувачем і back end. 
		  Front end та back end можуть бути розподілені між однією або кількома системами.
        </h5>
      </div>
      <div className="calculator">
        <h1>Set operations</h1>
        <div className="input-group">
          <label className="input-label">
            Number 1:
            <input className="input-field" type="text" value={number1} onChange={handleNumber1Change} />
          </label>
        </div>
        <div className="input-group">
          <label className="input-label">
            Operation:
            <select className="input-field" value={operation} onChange={handleOperationChange}>
              <option value="u">Union</option>
              <option value="d">Difference</option>
              <option value="i">Intersection</option>
              <option value="sD">Symmetric Difference</option>
              <option value="df">Disjoint From</option>
              <option value="sub">Subset Of</option>
              <option value="sup">Superset Of</option>
              
            </select>
          </label>
        </div>
        <div className="input-group">
          <label className="input-label">
            Number 2:
            <input className="input-field" type="text" value={number2} onChange={handleNumber2Change} />
          </label>
        </div>
        <div className="input-group">
          <button className="calculate-button" onClick={calculateResult}>Calculate</button>
        </div>
        <div className="input-group">
          <label className="input-label">
            Result:
            <input className="input-field" type="text" value={result} readOnly />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
