import '../../styles/global/humbergers-menue.css'
import {useState} from "react";

function MobileNavButton() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="hamburger-menue"
                onClick={() => setOpen(!open) }>
                <span className='mobile-menue-strok-line'></span>
                <span className='mobile-menue-strok-line'></span>
                <span className='mobile-menue-strok-line'></span>
            </div>

            { open && (<ul className="mobile-menu">
                <li><a href="/projects">Projects</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/auth/signup">Sign Up</a></li>
                <li><a href="/auth/login">Login</a></li>
            </ul>)
            }
      </>
    );
}
export default MobileNavButton;