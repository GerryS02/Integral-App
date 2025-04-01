import React, { useState } from 'react';
import Navbar from './components/Navbar';
import InputForm from './components/InputForm';
import Result from './components/Result';
import { calculateIntegral } from './components/Calculation';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [result, setResult] = useState(null);
  const [inputValues, setInputValues] = useState(null);
  const [error, setError] = useState(null); // New state for error messages

  const handleCalculate = (coefficients) => {
    if (!coefficients) {
      console.error("Invalid coefficients received");
      return;
    }

    const calculationOutput = calculateIntegral(coefficients);

    if (calculationOutput.error) {
      setError(calculationOutput.error);
      setResult(null);
    } else {
      setResult(calculationOutput.result);
      setInputValues(coefficients);
      setError(null);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {/* Left Column: Input Form */}
          <div className="col-md-6">
            <div className="card p-3">
              <h4>Inputs</h4>
              <InputForm onCalculate={handleCalculate} />
            </div>
          </div>

          {/* Right Column: Result */}
          <div className="col-md-6">
            {error ? (
              <div className="alert alert-danger">{error}</div>
            ) : (
              result !== null && inputValues && (
                <div className="card p-3">
                  <h4>Results</h4>
                  <Result result={result} inputValues={inputValues} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;



