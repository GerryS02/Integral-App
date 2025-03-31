// import React, { useEffect } from 'react';

// const Result = ({ result, inputValues }) => {
//   useEffect(() => {
//     if (window.MathJax) {
//       window.MathJax.typesetPromise();
//     }
//   }, [result, inputValues]);

//   if (!inputValues) return null; // Prevent errors when no input is available

//   // Extract input values safely
//   const { a, b, x2_coefficient, x_coefficient, constant } = inputValues;

//   // Dynamically create the LaTeX string for the integral expression
//   const integralExpression = `\\[ \\int_{${a}}^{${b}} (${x2_coefficient}x^2 + ${x_coefficient}x + ${constant}) \\, dx \\]`;

//   // return (
//   //   <div className="container mt-4">

//   //     <div>
//   //       <p>
//   //         <strong>Approximate:</strong>
//   //       </p>
//   //       <p id="mathjax-container">
//   //         {/** MathJax will process this span */}
//   //         <span>{integralExpression}</span>
//   //       </p>
//   //       <p>
//   //         <strong>Answer:</strong> <span>{result}</span>
//   //       </p>
//   //     </div>
//   //   </div>
//   // );

//   return (
//     <div className="container mt-4">
//       <div>
//         <p className="label-text">Approximate:</p>
//         <p id="mathjax-container">
//           {/** MathJax will process this span */}
//           <span className="result-box">{integralExpression}</span>
//         </p>
//         <p className="label-text">Answer:</p>
//         <span className="result-box">{result}</span>
//         {/* <p>
//           <span>{result}</span>
//         </p> */}
//       </div>
//     </div>
//   );
// };

// export default Result;

// this is a good code below

// import React, { useEffect, useState } from "react";

// const Result = ({ result, inputValues }) => {
//   const [integralExpression, setIntegralExpression] = useState("");

//   useEffect(() => {
//     if (!inputValues) return;

//     const { a, b, x2_coefficient, x_coefficient, constant } = inputValues;

//     // Dynamically update the integral expression
//     const newExpression = `\\int_{${a}}^{${b}} (${x2_coefficient}x^2 + ${x_coefficient}x + ${constant}) \\, dx`;
//     setIntegralExpression(newExpression);

//     // Ensure MathJax re-renders the expression correctly
//     if (window.MathJax) {
//       window.MathJax.typesetPromise().then(() => {
//         console.log("MathJax re-rendered!");
//       });
//     }
//   }, [inputValues]); // Re-run when inputValues change

//   useEffect(() => {
//     if (!inputValues || !window.Plotly) return;

//     const { a, b, x2_coefficient, x_coefficient, constant } = inputValues;

//     // Function to calculate f(x)
//     const fx = (x) => x2_coefficient * x ** 2 + x_coefficient * x + constant;

//     // Generate x values starting from 0, with step size 1
//     const xValues = [];
//     const yValues = [];
//     for (let x = 0; x <= Math.max(b, 0); x += 1) {
//       xValues.push(x);
//       yValues.push(fx(x));
//     }

//     // Define the integral approximation area (shaded region)
//     const shadedX = [];
//     const shadedY = [];
//     for (let x = Math.ceil(a); x <= Math.floor(b); x += 1) {
//       shadedX.push(x);
//       shadedY.push(fx(x));
//     }
//     shadedX.push(b, a);
//     shadedY.push(0, 0); // Close the shape

//     const shadedArea = {
//       x: shadedX,
//       y: shadedY,
//       fill: "tozeroy",
//       type: "scatter",
//       mode: "none",
//       name: "Integral Area",
//       fillcolor: "rgba(0,100,250,0.3)",
//     };

//     // Define the function curve
//     const functionCurve = {
//       x: xValues,
//       y: yValues,
//       type: "scatter",
//       mode: "lines+markers",
//       name: "Function f(x)",
//       line: { color: "blue" },
//       marker: { color: "red", size: 6 },
//     };

//     const layout = {
//       title: "Integral Approximation",
//       xaxis: { title: "x", dtick: 1, range: [0, Math.max(b, 1)] },
//       yaxis: { title: "f(x)" },
//     };

//     // Plot the graph
//     window.Plotly.newPlot("plot", [functionCurve, shadedArea], layout);
//   }, [inputValues]);

//   if (!inputValues) return null;

//   return (
//     <div className="container mt-4">

//       <p className="label-text">Approximate:</p>
//       {/* <span id="mathjax-expression">{`\\(${integralExpression}\\)`}</span> */}
//       <p id="mathjax-container">
//         {/** MathJax will process this span */}
//         <span className="result-box">{`\\(${integralExpression}\\)`}</span>

//       </p>
//       <p className="label-text">Answer:</p>
//       <span className="result-box">{result}</span>
      
//       <div id="plot" style={{ width: "100%", height: "400px" }}></div>
//     </div>
//   );
// };

// export default Result;


// good result code to keep

// import React, { useEffect, useState } from "react";

// const Result = ({ result, inputValues }) => {
//   const [integralExpression, setIntegralExpression] = useState("");

//   useEffect(() => {
//     if (!inputValues) return;

//     const { a, b, x2_coefficient, x_coefficient, constant } = inputValues;

//     // Update the integral expression
//     const newExpression = `\\int_{${a}}^{${b}} (${x2_coefficient}x^2 + ${x_coefficient}x + ${constant}) \\, dx`;
//     setIntegralExpression(newExpression);

//     // Ensure MathJax re-renders correctly
//     setTimeout(() => {
//       if (window.MathJax) {
//         window.MathJax.typesetPromise().then(() => {
//           console.log("MathJax re-rendered!");
//         });
//       }
//     }, 50);
//   }, [inputValues]);

//   useEffect(() => {
//     if (!inputValues || !window.Plotly) return;

//     const { a, b, x2_coefficient, x_coefficient, constant } = inputValues;

//     // Function to calculate f(x)
//     const fx = (x) => x2_coefficient * x ** 2 + x_coefficient * x + constant;

//     // Generate x values starting from 0
//     const xValues = [];
//     const yValues = [];
//     for (let x = 0; x <= Math.max(b, 0); x += 1) {
//       xValues.push(x);
//       yValues.push(fx(x));
//     }

//     // Define the integral area (shaded region)
//     const shadedX = [];
//     const shadedY = [];
//     for (let x = Math.ceil(a); x <= Math.floor(b); x += 1) {
//       shadedX.push(x);
//       shadedY.push(fx(x));
//     }
//     shadedX.push(b, a);
//     shadedY.push(0, 0); // Close the shape

//     const shadedArea = {
//       x: shadedX,
//       y: shadedY,
//       fill: "tozeroy",
//       type: "scatter",
//       mode: "none",
//       name: "Integral Area",
//       fillcolor: "rgba(0,100,250,0.3)",
//     };

//     // Define function curve
//     const functionCurve = {
//       x: xValues,
//       y: yValues,
//       type: "scatter",
//       mode: "lines+markers",
//       name: "Function f(x)",
//       line: { color: "blue" },
//       marker: { color: "red", size: 6 },
//     };

//     const layout = {
//       title: "Integral Approximation",
//       xaxis: { title: "x", dtick: 1, range: [0, Math.max(b, 1)] },
//       yaxis: { title: "f(x)" },
//     };

//     // Delay Plotly rendering to ensure the div is in the DOM
//     setTimeout(() => {
//       const plotElement = document.getElementById("plot");
//       if (plotElement) {
//         window.Plotly.newPlot(plotElement, [functionCurve, shadedArea], layout);
//       }
//     }, 200);
//   }, [inputValues]);

//   if (!inputValues) return null;

//   return (
//     <div className="container mt-4">
//       <h5>Integral Approximation Result:</h5>
//       <p>
//         <strong>
//           <span id="mathjax-expression">{`\\(${integralExpression}\\)`}</span>
//         </strong>
//       </p>
//       <p>
//         <strong>Result:</strong> <span>{result}</span>
//       </p>
//       <div id="plot" style={{ width: "100%", height: "400px" }}></div>
//     </div>
//   );
// };

// export default Result;


import React, { useEffect, useState } from "react";

const Result = ({ result, inputValues }) => {
  const [integralExpression, setIntegralExpression] = useState("");

  useEffect(() => {
    if (!inputValues) return;

    const { a, b, x2_coefficient, x_coefficient, constant } = inputValues;

    if (a > b) {
      setIntegralExpression("");
      return;
    }

    // Generate the correct integral expression with LaTeX
    const newExpression = `\\int_{${a}}^{${b}} (${x2_coefficient}x^2 + ${x_coefficient}x + ${constant}) \\, dx`;
    setIntegralExpression(newExpression);

    // Ensure MathJax renders immediately
    setTimeout(() => {
      if (window.MathJax) {
        window.MathJax.typesetPromise();
      }
    }, 50);
  }, [inputValues]);

  useEffect(() => {
    if (!inputValues || !window.Plotly || inputValues.a > inputValues.b) return;

    const { a, b, x2_coefficient, x_coefficient, constant } = inputValues;
    const fx = (x) => x2_coefficient * x ** 2 + x_coefficient * x + constant;

    // Generate function curve
    const xValues = [], yValues = [];
    for (let x = 0; x <= Math.max(b, 1); x += 1) {
      xValues.push(x);
      yValues.push(fx(x));
    }

    // Define shaded area
    const shadedX = [], shadedY = [];
    for (let x = Math.ceil(a); x <= Math.floor(b); x += 1) {
      shadedX.push(x);
      shadedY.push(fx(x));
    }
    shadedX.push(b, a);
    shadedY.push(0, 0);

    const shadedArea = {
      x: shadedX,
      y: shadedY,
      fill: "tozeroy",
      type: "scatter",
      mode: "none",
      name: "Integral Area",
      fillcolor: "rgba(100,100,100,0.3)",
    };

    const functionCurve = {
      x: xValues,
      y: yValues,
      type: "scatter",
      mode: "lines",
      name: "Function f(x)",
      line: { color: "blue" },
    };

    const layout = {
      title: "Integral Approximation",
      xaxis: { title: "x", dtick: 1, range: [0, Math.max(b, 1)] },
      yaxis: { title: "f(x)" },
    };

    // Ensure Plotly renders properly
    setTimeout(() => {
      window.Plotly.newPlot("plot", [functionCurve, shadedArea], layout);
    }, 100);
  }, [inputValues]);

  const formatResult = (value) => {
    if (value === null || value === undefined) return "N/A";
    return Number.isInteger(value) ? value : value.toFixed(2);
  };

  if (!inputValues) return null;

  return (
    <div className="container mt-4">
      {result?.error ? (
        <div className="error-message">{result.error}</div>
      ) : (
        <>
          <p className="label-text">Approximate:</p>
          <p id="mathjax-container">
            <span className="result-box">{`\\(${integralExpression}\\)`}</span>
          </p>
          <p className="label-text">Answer:</p>
          <span className="result-box">{formatResult(result)}</span>
          <div id="plot" style={{ width: "100%", height: "400px" }}></div>
        </>
      )}
    </div>
  );
};

export default Result;



