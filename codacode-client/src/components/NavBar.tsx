import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="container">
      <div className="nav-content">
        <div className="logo-and-links">
          <a className="home-logo" href="/">
            Codacode
          </a>
          <div className="links-list">
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
          </div>
        </div>
        <div className="auth-btns">
          <a href="/auth/signup" className="auth-btn signup">
            Sign Up
          </a>
          <a href="/auth/login" className="auth-btn login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
