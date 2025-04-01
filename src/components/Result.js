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



