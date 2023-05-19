import './MainbodySty.css'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import mail from '../../assets/mail.png'
import myPhoto from '../../assets/myphoto.jpg'

function Mainbody() {
    return(
        <>
            <div className='sections-wrapper'>
               {/* Nav section */}
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
                {/* About Section */}
                <section id='about'>
                    <div className='about-row'>
                        <div className='column-left'>
                            <h2><u>About me</u></h2>
                            <h3>How it all started</h3>
                            <p className='paragraph-text'>
                            Hi there, My name is Okorie Onyedikachi Cosmas, a budding frontend engineer.
                            Prior to the completion of my bachelors degree, i found my passion for website design and 
                            development when i walked in on a classmate working on a website for his client he got on Fiverr, 
                            i asked him how he was able to curate these beautiful designs and put them on the internet, 
                            He laughed and showed 
                            </p>
                            <div>
                                <hr className='about-hr1'/>
                                <hr className='about-hr2'/>
                            </div>
                            <h3>How it is going</h3>
                            <p>
                                2+ years after delivering websites designed on Wordpress as a freelancer, 
                                i needed more. i had learnt CSS casually during my website design journey, but 
                                i knew i could do better. I wanted to build these websites from scratch without a CMS controlling
                                what i had access to, so i went back to the basics
                                to pick a better and advanced website development path. Choosing frontend 
                                development came easy to me because of my love for CSS and
                            </p>
                        </div>
                        <div className='column-right'>
                            <div id='photo-box'>
                                <img src={myPhoto} alt='Dannie' id='myphoto'/>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Skill Section */}
                <section id='skills'>
                    <div className='skill-container'>
                        <h2><u>Skill Proficiency</u></h2>
                    </div>
                </section> 
            </div>
            
        </>
    )    
};

export default Mainbody