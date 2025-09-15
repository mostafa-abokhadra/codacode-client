import '../styles/humbergers-menue.css'

function MobileNavButton() {
    return (
        <>
            <div className="hamburger-menue">
                <span className='mobile-menue-strok-line'></span>
                <span className='mobile-menue-strok-line'></span>
                <span className='mobile-menue-strok-line'></span>
            </div>

            <ul className="mobile-menu">
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/auth/signup">Sign Up</a></li>
                <li><a href="/auth/login">Login</a></li>
            </ul>
      </>
    );
}
export default MobileNavButton;