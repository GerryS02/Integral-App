import React from "react";

const Result = ({ result }) => {
  return (
    <div className="container mt-4">
      <h3>Result</h3>
      <p>The integral approximation result is: <strong>{result}</strong></p>
    </div>
  );
};

export default Result;
