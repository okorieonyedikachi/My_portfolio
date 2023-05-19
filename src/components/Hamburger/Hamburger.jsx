import './Hamburger.css'

function Hamburger({isOpen}) {
    // console.log(isOpen)
    return (
        <>
            <div className='hamburger'>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
                {/* <img src={menu} alt='menu-icon' className='hamburger'/> */}
            </div>

            {/* <style>
                {`
                
                    .line1{
                        transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
                    }
                    .line2{
                        transform: ${ isOpen ? 'translateX(100%)' : 'translateX(0)'};
                        opacity: ${ isOpen ? 0 : 1};
                    }
                    .line3{
                        transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
                    }
                `}
            </style> */}
        </>
    )
}
export default Hamburger;