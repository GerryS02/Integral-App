import React from "react";

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
      <footer className="footer">
        <div className="footer-content">
          © {currentYear} Gerry S.
        </div>
      </footer>
    );
  }
}

export default Footer;
