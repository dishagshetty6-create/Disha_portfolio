function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Disha Shetty. All rights
          reserved.
        </p>

        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
