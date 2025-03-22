import React from "react";

class InputForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputValues = {
      a: parseFloat(formData.get("a")),
      b: parseFloat(formData.get("b")),
      x2_coefficient: parseFloat(formData.get("x2_coefficient")),
      x_coefficient: parseFloat(formData.get("x_coefficient")),
      constant: parseFloat(formData.get("constant")),
      method: formData.get("method"),
    };

    // Check if any of the input values are invalid (NaN)
    if (isNaN(inputValues.a) || isNaN(inputValues.b) || isNaN(inputValues.x2_coefficient) || isNaN(inputValues.x_coefficient) || isNaN(inputValues.constant)) {
      console.error("Invalid input values");
      alert("Please make sure all input fields contain valid numbers.");
      return;
    }

    console.log("Form Data:", inputValues);

    // Pass input values to parent component if needed
    if (this.props.onCalculate) {
      this.props.onCalculate(inputValues);
    }
  };

  render() {
    return (
      <div className="container mt-4">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Lower Bound (a):</label>
            <input type="number" name="a" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Upper Bound (b):</label>
            <input type="number" name="b" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Coefficient of x²:</label>
            <input type="number" name="x2_coefficient" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Coefficient of x:</label>
            <input type="number" name="x_coefficient" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Constant:</label>
            <input type="number" name="constant" className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Approximation Method:</label>
            <select name="method" className="form-select" required>
              <option value="0" id="select">Select</option>
              <option value="1">Left Endpoint Approximation</option>
              <option value="2">Right Endpoint Approximation</option>
              <option value="3">Midpoint Approximation</option>
              <option value="4">Trapezoidal Approximation</option>
              <option value="5">Simpson's Approximation</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Calculate
          </button>
        </form>
      </div>
    );
  }
}

export default InputForm;
