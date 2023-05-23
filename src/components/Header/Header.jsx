import './Headerstyle.css'
import menu from '../../assets/menu.png'
import { useState } from 'react';

import Hamburger from '../Hamburger/Hamburger';

function Header() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)

    }

    return (
        <div>
            <nav className='navBar'>
                <div className='nav-container'>
                    <header className='header'>
                        <div className='header-left'>
                            <h2>Dannie.</h2>
                        </div>
                        <div className='header-right'>
                            <div className='nav-menu'>
                                <ul className='nav-items'>
                                    <li>About</li>
                                    <li>Skills</li>
                                    <li>Projects</li>
                                    <li>Contact</li>
                                    <li>Resume</li>
                                </ul>
                                {/* <button id='resume-btn'>Résumé</button> */}
                            </div>
                            <div className='hamburger' onClick={toggleHamburger}>
                                <Hamburger />
                            </div>
                            
                        </div> 
                    </header>
                    
                </div>
            </nav>
            <style jsx>{`
                @media (max-width: 767px){
                    .nav-items{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        
                    } 
                }    
            `}</style>
        </div>
    )
}
export default Header;