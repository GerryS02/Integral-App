// calculation.js
export const calculateIntegral = ({ a, b, x2_coefficient, x_coefficient, constant, method }) => {
  const INCREMENT = 0.5;
  const h = INCREMENT;

  // Function to calculate the value of f(x)
  const fx = (x) => x2_coefficient * Math.pow(x, 2) + x_coefficient * x + constant;

  // Left Endpoint Approximation
  const leftEndpoint = () => {
    let sum = 0;
    for (let x = a; x < b; x += INCREMENT) {
      sum += fx(x);
    }
    return h * sum;
  };

  // Right Endpoint Approximation
  const rightEndpoint = () => {
    let sum = 0;
    for (let x = a + INCREMENT; x <= b; x += INCREMENT) {
      sum += fx(x);
    }
    return h * sum;
  };

  // Midpoint Approximation
  const midpoint = () => {
    let sum = 0;
    for (let x = a + INCREMENT / 2; x < b; x += INCREMENT) {
      sum += fx(x);
    }
    return h * sum;
  };

  // Trapezoidal Approximation
  const trapezoidal = () => {
    let sum = fx(a) + fx(b);
    for (let x = a + INCREMENT; x < b; x += INCREMENT) {
      sum += 2 * fx(x);
    }
    return (h / 2) * sum;
  };

  // Simpson's Approximation
  const simpsons = () => {
    let sum = fx(a) + fx(b);
    for (let x = a + INCREMENT; x < b; x += INCREMENT * 2) {
      sum += 4 * fx(x);
    }
    for (let x = a + INCREMENT * 2; x < b; x += INCREMENT * 2) {
      sum += 2 * fx(x);
    }
    return (h / 3) * sum;
  };

  // Selecting the appropriate method
  switch (parseInt(method)) {
    case 1:
      return leftEndpoint();
    case 2:
      return rightEndpoint();
    case 3:
      return midpoint();
    case 4:
      return trapezoidal();
    case 5:
      return simpsons();
    default:
      return 'Invalid method selected';
  }
};
