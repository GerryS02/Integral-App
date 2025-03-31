// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import InputForm from './components/InputForm';
// import Result from './components/Result';
// import { calculateIntegral } from './components/Calculation';  // Correct import
// import './App.css';

// const App = () => {
//   const [result, setResult] = useState(null);

//   const handleCalculate = (coefficients) => {
//     if (!coefficients) {
//       console.error("Invalid coefficients received");
//       return;
//     }

//     const calculatedResult = calculateIntegral(coefficients); // Correct function call
//     console.log("Calculation result:", calculatedResult);
//     setResult(calculatedResult); // Set the calculated result
//   };

//   return (
//     <>
//       <Navbar />
//       <InputForm onCalculate={handleCalculate} />
//       {result !== null && <Result result={result} />}
//     </>
//   );
// };

// export default App;

//  new better code with card column layout 

// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import InputForm from './components/InputForm';
// import Result from './components/Result';
// import { calculateIntegral } from './components/Calculation';
// import './App.css';

// const App = () => {
//   const [result, setResult] = useState(null);

//   const handleCalculate = (coefficients) => {
//     if (!coefficients) {
//       console.error("Invalid coefficients received");
//       return;
//     }

//     const calculatedResult = calculateIntegral(coefficients);
//     console.log("Calculation result:", calculatedResult);
//     setResult(calculatedResult);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-4">
//         <div className="row">
//           {/* Left Column: Input Form */}
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h4>Input Form</h4>
//               <InputForm onCalculate={handleCalculate} />
//             </div>
//           </div>

//           {/* Right Column: Result */}
//           <div className="col-md-6">
//             {result !== null && (
//               <div className="card p-3">
//                 <h4>Integral Approximation Result</h4>
//                 <Result result={result} />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import InputForm from './components/InputForm';
// import Result from './components/Result';
// import { calculateIntegral } from './components/Calculation';
// import Footer from './components/Footer';
// import './App.css';

// const App = () => {
//   const [result, setResult] = useState(null);
//   const [inputValues, setInputValues] = useState(null);  // Store input values

//   const handleCalculate = (coefficients) => {
//     if (!coefficients) {
//       console.error("Invalid coefficients received");
//       return;
//     }

//     const calculatedResult = calculateIntegral(coefficients);
//     console.log("Calculation result:", calculatedResult);
//     setResult(calculatedResult);  // Set the calculated result
//     setInputValues(coefficients); // Store the input values
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-4">
//         <div className="row">
//           {/* Left Column: Input Form */}
//           <div className="col-md-6">
//             <div className="card p-3">
//               <h4>Inputs</h4>
//               <InputForm onCalculate={handleCalculate} />
//             </div>
//           </div>

//           {/* Right Column: Result */}
//           <div className="col-md-6">
//             {result !== null && inputValues && (
//               <div className="card p-3">
//                 <h4>Results</h4>
//                 <Result result={result} inputValues={inputValues} />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default App;

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



