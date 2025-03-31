// // calculation.js
// export const calculateIntegral = ({ a, b, x2_coefficient, x_coefficient, constant, method }) => {
  
//   // If a>b display an error message
//   if (a > b) {
//     return { error: "Invalid input: Lower limit (a) cannot be greater than upper limit (b)." };
//   }
  
//   // If a == b, return 0 immediately
//   if (a === b) {
//     return 0;
//   }
  
//   const INCREMENT = 0.5;
//   const h = INCREMENT;

//   // Function to calculate the value of f(x)
//   const fx = (x) => x2_coefficient * Math.pow(x, 2) + x_coefficient * x + constant;

//   // Left Endpoint Approximation
//   const leftEndpoint = () => {
//     let sum = 0;
//     for (let x = a; x < b; x += INCREMENT) {
//       sum += fx(x);
//     }
//     return h * sum;
//   };

//   // Right Endpoint Approximation
//   const rightEndpoint = () => {
//     let sum = 0;
//     for (let x = a + INCREMENT; x <= b; x += INCREMENT) {
//       sum += fx(x);
//     }
//     return h * sum;
//   };

//   // Midpoint Approximation
//   const midpoint = () => {
//     let sum = 0;
//     for (let x = a + INCREMENT / 2; x < b; x += INCREMENT) {
//       sum += fx(x);
//     }
//     return h * sum;
//   };

//   // Trapezoidal Approximation
//   const trapezoidal = () => {
//     let sum = fx(a) + fx(b);
//     for (let x = a + INCREMENT; x < b; x += INCREMENT) {
//       sum += 2 * fx(x);
//     }
//     return (h / 2) * sum;
//   };

//   // Simpson's Approximation
//   const simpsons = () => {
//     let sum = fx(a) + fx(b);
//     for (let x = a + INCREMENT; x < b; x += INCREMENT * 2) {
//       sum += 4 * fx(x);
//     }
//     for (let x = a + INCREMENT * 2; x < b; x += INCREMENT * 2) {
//       sum += 2 * fx(x);
//     }
//     return (h / 3) * sum;
//   };

//   // Selecting the appropriate method
//   switch (parseInt(method)) {
//     case 1:
//       return leftEndpoint();
//     case 2:
//       return rightEndpoint();
//     case 3:
//       return midpoint();
//     case 4:
//       return trapezoidal();
//     case 5:
//       return simpsons();
//     default:
//       return 'Invalid method selected';
//   }

  
// };

export const calculateIntegral = ({ a, b, x2_coefficient, x_coefficient, constant, method }) => {
  if (a > b) {
    return { error: "Invalid input: Lower limit (a) cannot be greater than upper limit (b)." };
  }

  if (a === b) {
    return { result: 0 };
  }

  const INCREMENT = 0.5;
  const h = INCREMENT;

  const fx = (x) => x2_coefficient * Math.pow(x, 2) + x_coefficient * x + constant;

  const leftEndpoint = () => {
    let sum = 0;
    for (let x = a; x < b; x += INCREMENT) {
      sum += fx(x);
    }
    return h * sum;
  };

  const rightEndpoint = () => {
    let sum = 0;
    for (let x = a + INCREMENT; x <= b; x += INCREMENT) {
      sum += fx(x);
    }
    return h * sum;
  };

  const midpoint = () => {
    let sum = 0;
    for (let x = a + INCREMENT / 2; x < b; x += INCREMENT) {
      sum += fx(x);
    }
    return h * sum;
  };

  const trapezoidal = () => {
    let sum = fx(a) + fx(b);
    for (let x = a + INCREMENT; x < b; x += INCREMENT) {
      sum += 2 * fx(x);
    }
    return (h / 2) * sum;
  };

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

  let result;
  switch (parseInt(method)) {
    case 1:
      result = leftEndpoint();
      break;
    case 2:
      result = rightEndpoint();
      break;
    case 3:
      result = midpoint();
      break;
    case 4:
      result = trapezoidal();
      break;
    case 5:
      result = simpsons();
      break;
    default:
      return { error: "Invalid method selected." };
  }

  return { result: parseFloat(result.toFixed(2)) }; // Round to 2 decimal places
};

