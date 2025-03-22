import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import Result from './components/Result';
import { calculateIntegral } from './components/Calculation';
import './App.css';

const App = () => {
  const [result, setResult] = useState(null);

  const handleCalculate = (coefficients) => {
    if (!coefficients) {
      console.error("Invalid coefficients received");
      return;
    }

    // Example calculation (replace this with actual integral logic)
    // const calculatedResult = 
    //   parseFloat(coefficients.a || 0) + parseFloat(coefficients.b || 0) + parseFloat(coefficients.c || 0);

    // console.log("Calculation result:", calculatedResult);
    // setResult(calculatedResult); // Set the calculated result

    const calculatedResult = calculateIntegral(coefficients); // Call the integral calculation function
    console.log("Calculation result:", calculatedResult);
    setResult(calculatedResult); // Set the calculated result
  };

  return (
    <>
      <Navbar />
      <InputForm onCalculate={handleCalculate} />
      {result !== null && <Result result={result} />}
    </>
  );
};


export default App;
