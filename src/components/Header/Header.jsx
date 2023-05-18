import './Headerstyle.css'
import menu from '../../assets/menu.png'
function Header() {
   
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
                                <ul id='nav-items'>
                                    <li>About</li>
                                    <li>Skills</li>
                                    <li>Projects</li>
                                    <li>Contact</li>
                                </ul>
                                <button id='resume-btn'>Resume</button>
                            </div>
                            {/* <img src={menu} alt='menu-icon' id='hamburger'/>  */}
                        </div> 
                    </header>
                    
                </div>
            </nav>
        </>
    )
}
export default Header;