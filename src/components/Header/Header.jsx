import './Headerstyle.css'
import menu from '../../assets/menu.png'
import {useState} from 'react';

function Header() {

   const [isNavOpen, setIsNavOpen] = useState(false);

   const handleToggle = () =>{
    setIsNavOpen(!isNavOpen);
   }
    return(
        <>
            <nav className='navBar'>
                <div className='nav-container'>
                    <header className='header'>
                        <div className='header-left'>
                            <h2>Dannie.</h2>
                        </div>
                        <div className='header-right'>
                            <div className='nav-menu'>
                                <ul className={`nav-items ${isNavOpen? 'open' : ''}`}>
                                    <li>About</li>
                                    <li>Skills</li>
                                    <li>Projects</li>
                                    <li>Contact</li>
                                </ul>
                                {/* <button id='resume-btn'>Résumé</button> */}
                            </div>
                            <div className={`humburger ${isNavOpen ? 'open' : ''}`} onClick={handleToggle}>
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                                {/* <img src={menu} alt='menu-icon' className='hamburger'/> */}
                            </div>
                        </div> 
                    </header>
                    
                </div>
            </nav>
        </>
    )
}
export default Header;