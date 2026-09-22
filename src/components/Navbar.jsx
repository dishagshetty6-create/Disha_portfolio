function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          DISHA<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/Disha_Shetty_Resume.pdf"
          className="resume-btn"
          download
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;