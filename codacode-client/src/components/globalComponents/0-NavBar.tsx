import "../../styles/global/navbar.css";
import MobileNavButton from "./1-MobileNavButton";

function NavBar() {
  return (
    <nav className="full-container">
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
        <MobileNavButton/>
      </div>
    </nav>
  );
}
export default NavBar;
