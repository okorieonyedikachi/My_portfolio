import './Headerstyle.css'
import menu from '../../assets/menu.png'
function Header() {
   
    return(
        <>
            <div className='header'>
                <nav>
                    <div className='nav-container'>
                        <h2>Dannie.</h2>
                        <img src={menu} alt='menu-icon' id='hamburger'/>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header;