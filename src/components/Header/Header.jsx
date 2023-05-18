import './Headerstyle.css'
import menu from '../../assets/menu.png'
function Header() {
   
    return(
        <>
            <nav className='navBar'>
                <div className='nav-container'>
                    <header className='header'>
                        <div className='header-right'>
                            <h2>Dannie.</h2>
                        </div>
                        <div className='header-left'>
                            <img src={menu} alt='menu-icon' id='hamburger'/> 
                        </div> 
                    </header>
                    
                </div>
            </nav>
        </>
    )
}
export default Header;