<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->


# Integral Approximation App

## Background

Integral approximation is a method used to estimate the value of a definite integral when an exact solution is difficult or impossible to obtain analytically. In many cases, numerical methods are used to approximate the area under a curve defined by a function over a given interval \([a, b]\).

Given a function, the integral can be approximated by dividing the area into small subintervals, calculating the function's value at specific points within each subinterval, and then summing these values with a weighted factor. These methods are especially useful when the function is complex, and an analytical solution is not straightforward.

This project provides a web application where users can input the bounds of a definite integral and approximate the result using one of several numerical methods.

---

## Project Overview

The **Integral Approximation App** allows users to approximate the value of definite integrals for polynomials of the form:

$$
f(x) = ax^2 + bx + c
$$

Users are required to provide the coefficients for the polynomial and the bounds of the integral. The app then uses different numerical methods to approximate the integral within the given bounds. 

The user can select from the following approximation methods:
- **Left Endpoint Approximation**
- **Right Endpoint Approximation**
- **Midpoint Approximation**
- **Trapezoidal Approximation**
- **Simpson’s Approximation**

### Key Features:
- Accepts polynomials with a maximum degree of 2 (i.e., \( ax^2 + bx + c \)).
- The interval \([a, b]\) is divided into subintervals of a constant size \( h = 0.5 \).
- The app calculates the integral based on the selected method and displays the result along with a plot of the function and the area under the curve.

---

## Numerical Approximation Methods

For an integral with bounds \( a \) and \( b \), we can approximate the result by dividing the interval into \( n \) subintervals. The value of \( h \) is given by:

$$
h = \frac{b - a}{n}
$$

Where \( n \) is kept constant as 0.5 in this project. The formula for each approximation method is as follows:

### Left Endpoint Approximation

The left endpoint approximation uses the function values at the left endpoints of the subintervals:

$$
L_n = h \left[ f(x_0) + f(x_1) + f(x_2) + \dots + f(x_{n-1}) \right]
$$

### Right Endpoint Approximation

The right endpoint approximation uses the function values at the right endpoints of the subintervals:

$$
R_n = h \left[ f(x_1) + f(x_2) + f(x_3) + \dots + f(x_{n}) \right]
$$

### Midpoint Approximation

The midpoint approximation uses the function values at the midpoints of the subintervals:

$$
M_n = h \left[ f(c) + f(c + h) + f(c + 2h) + \dots + f(c + (n-1)h) \right]
$$

Where \( c \) is the midpoint of the interval.

### Trapezoidal Approximation

The trapezoidal approximation calculates the integral using trapezoids between the function values at the endpoints and midpoints:

$$
T_n = \frac{h}{2} \left[ f(x_0) + 2f(x_1) + f(x_2) + 2f(x_3) + \dots + 2f(x_{n-1}) + f(x_n) \right]
$$

### Simpson’s Approximation

Simpson’s rule approximates the integral using parabolic segments between the function values:

$$
S_n = \frac{h}{3} \left[ f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \dots + 2f(x_{n-2}) + 4f(x_{n-1}) + f(x_n) \right]
$$

---

## How to Use

1. **Enter the Polynomial Coefficients**:
   - Users enter the values for the polynomial coefficients \( a \), \( b \), and \( c \) corresponding to the terms $$( ax^2 + bx + c \) $$.

2. **Select the Approximation Method**:
   - Users can choose from the following methods:
     - Left Endpoint Approximation
     - Right Endpoint Approximation
     - Midpoint Approximation
     - Trapezoidal Approximation
     - Simpson’s Approximation

3. **View the Result**:
   - After submitting the form, the app will compute the integral approximation and display:
     - The mathematical expression of the integral using LaTeX.
     - The result of the approximation.
     - A graph showing the polynomial function and the area under the curve (shaded region).

---

## Future Development or Enhancements

While the current implementation works for polynomials with a maximum degree of 2, the app could be significantly enhanced with additional features. Some potential future developments include:

1. **Support for Higher-Degree Polynomials**:
   - The app could be extended to handle polynomials of higher degrees (e.g., cubic, quartic) by dynamically adjusting the function expression based on user input.

2. **Support for Other Types of Functions**:
   - The app could be extended to support other types of functions such as trigonometric functions, exponential functions, logarithmic functions, or rational functions.
   - Users would be able to input a function as a string, and the app would parse and evaluate it accordingly.

3. **Custom Number of Subintervals**:
   - Allow users to input the number of subintervals \( n \) instead of fixing it to a constant. This would provide users with more control over the accuracy of the approximation. The value of \( h \) would then be calculated as:

$$
h = \frac{b - a}{n}
$$

4. **Adaptive Methods**:
   - Implement adaptive numerical methods that adjust the number of subintervals based on the function’s behavior to improve the accuracy of the approximation without requiring the user to manually input \( n \).

5. **Error Estimation**:
   - Introduce error estimation for each approximation method, showing how close the approximation is to the exact solution (if available) or the true value.

These enhancements would make the app more powerful and versatile, allowing users to perform a broader range of integral approximations for different types of functions.

---

![Image](https://github.com/user-attachments/assets/696d0b8e-26ab-4398-aff8-1958b5a71c8d) 
