// import React from "react";

// const Result = ({ result }) => {
//   return (
//     <div className="container mt-4">
//       <h3>Result</h3>
//       <p>The integral approximation result is: <strong>{result}</strong></p>
//     </div>
//   );
// };


// export default Result;

// import React, { useEffect } from 'react';

// const Result = ({ result, inputValues }) => {
//   useEffect(() => {
//     if (window.MathJax) {
//       window.MathJax.typeset();
//     }
//   }, [result]);

//   // Dynamically create the LaTeX string for the integral expression
//   const { a, b, x2_coefficient, x_coefficient, constant, method } = inputValues;
//   const integralExpression = `\\int_{${a}}^{${b}} (${x2_coefficient}x^2 + ${x_coefficient}x + ${constant}) \\, dx`;

//   return (
//     <div className="container mt-4">
//       <h5>Integral Approximation Result:</h5>
//       <div>
//         <p>
//           <strong>
//             {/* Display the LaTeX formula for the integral expression */}
//             <span dangerouslySetInnerHTML={{ __html: `\\(${integralExpression}\\)` }} />
//           </strong>
//         </p>
//         <p>
//           <strong>Result:</strong> <span>{result}</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Result;


import React, { useEffect } from 'react';

const Result = ({ result, inputValues }) => {
  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }, [result, inputValues]);

  if (!inputValues) return null; // Prevent errors when no input is available

  // Extract input values safely
  const { a, b, x2_coefficient, x_coefficient, constant } = inputValues;

  // Dynamically create the LaTeX string for the integral expression
  const integralExpression = `\\[ \\int_{${a}}^{${b}} (${x2_coefficient}x^2 + ${x_coefficient}x + ${constant}) \\, dx \\]`;

  return (
    <div className="container mt-4">
      
      <div>
        <p>
          <strong>Approximate:</strong>
        </p>
        <p id="mathjax-container">
          {/** MathJax will process this span */}
          <span>{integralExpression}</span>
        </p>
        <p>
          <strong>Answer:</strong> <span>{result}</span>
        </p>
      </div>
    </div>
  );
};

export default Result;


