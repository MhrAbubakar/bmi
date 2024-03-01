import React, { useState } from 'react';
import './App.css';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');
  const [bmi, setBmi] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const calcBmi = (e) => {
    e.preventDefault();

    const heightValue = parseFloat(height);
    const weightValue = parseFloat(weight);

    if (isNaN(heightValue) || isNaN(weightValue) || heightValue === 0 || weightValue === 0) {
      alert("Please enter valid weight and height");
    } else {
      const calculatedBmi = (weightValue / (heightValue * heightValue)) * 703;
      setBmi(calculatedBmi.toFixed(1));

      if (calculatedBmi < 25) {
        setMessage('You are underweight');
      } else if (calculatedBmi >= 25) {
        setMessage('You are overweight');
      }
      setSubmitted(true);
      setHeight("")
      setHeight("")
    }
  };

  const resetForm = () => {
    setHeight('');
    setWeight('');
    setMessage('');
    setBmi('');
    setSubmitted(false);
  };

  return (
    <div>
      <form onSubmit={calcBmi}>
        <h1>BMI Calculator</h1>
        <input type="number" placeholder="Height (in inches)" value={height} onChange={(e) => setHeight(e.target.value)} /><span>Height (in inches)</span>
        <br /><br />
        <input type="number" placeholder="Weight (in pounds)" value={weight} onChange={(e) => setWeight(e.target.value)} /><span>Weight (in pounds)</span>
        <br /><br />
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
        <br /><br />
        {submitted && (
          <>
            <h3>Your BMI is: {bmi}</h3>
            <br /><br />
            <p>{message}</p>
          </>
        )}
      </form>
    </div>
  );
}

export default App;
