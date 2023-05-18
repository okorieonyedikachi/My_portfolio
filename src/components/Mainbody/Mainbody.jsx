import './MainbodySty.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import mail from '../../assets/mail.png'

function Mainbody() {
    return(
        <>
            <section id='home'>
                <div className='hero-container'>
                    <span id='img-box'>
                        <img/>
                    </span>
                    <div className='hero-right'>
                        <h1>
                            Hello, &nbsp;
                            <u>I'm Dannie</u>
                        </h1>
                        <p>
                            a mobile-concerned frontend web developer <br/>with an undying passion for css
                        </p>
                        <div id='hero-btns-container'>
                            <button className='hero-btn'><img src={linkedin} alt='linkedin-icon' id='l-icon' className='icons'/>Linked in</button>
                            <button className='hero-btn'><img src={github} alt='github-icon' id='github-icon' className='icons'/>Github</button>
                            <button className='hero-btn'><img src={mail} alt='mail-icon' id='l-icon' className='icons'/>Email</button>
                        </div>
                    </div> 
                </div>
                

            </section>
        </>
    )    
};

export default Mainbody