import {React,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import '../Navbar/Navbar.css';
import './About.css'
import {
    Link
  } from "react-router-dom";

function About() {
    const [showList,setShowList]= useState(false);
    const [showCross,setShowCross]=useState(false);
    const [showBar,setShowBar]= useState(false);
    function OpenList(){
     setShowList(!showList)
    }
    function NoCross(){
      setShowCross(!showCross)
    }
    function NoBar(){
      setShowBar(!showBar)
    }
  return (
    <>  
        <div className='container3'>
        <h1 className='portfolio'>Portfolio.</h1>
        <div className= {showList ? "open1 ul li":"list1 ul li"}> 
                  <ul className='ul'>
                      <li className='li'>
                        <Link className="noLine" to='/'>Home </Link></li>
                      <li className='li'>
                        <Link className="noLine" to="/about">About</Link> </li>
                      <li className='li'>Projects</li>
                      <li className='li'>Cv</li>
                      <li className='li'><Link className='noLine'  to="/contact">Contact</Link></li>
                  </ul> 
             </div>
        <span className={showCross? "noBar1":"bars1"} onClick= {()=>{
              OpenList();
              NoBar();
              NoCross();
             }}><FontAwesomeIcon icon={faBars} /></span>
             <span className={showBar ? "cross1":'noBar1'} onClick={()=>{
              NoCross();
              OpenList();
              NoBar();
            }}><FontAwesomeIcon icon={faXmark} /></span>
        <h2 className='home'><Link className="noLine" to="/">Home<FontAwesomeIcon className='chevron' icon={faChevronRight} /></Link></h2>
        <h2 className='about'>About<FontAwesomeIcon className='chevron' icon={faChevronRight} /></h2>
        <h1 className='aboutus'>About US</h1>
        <h1 className='skillsHead'>My Skills</h1>
        <div className='skills'>
        <div className='skillDesc'> <div className='skillName'> HTML</div> <div className='skillPercents'>95%</div></div>
        <div className='hundred'> <div className='Percent'> </div></div>
        <div className='skillDesc2'> <div className='skillName2'> CSS</div> <div className='skillPercents2'>90%</div></div>
        <div className='hundred2'> <div className='Percent2'> </div></div>
        <div className='skillDesc3'> <div className='skillName2'> Javascript</div> <div className='skillPercents2'>65%</div></div>
        <div className='hundred3'> <div className='Percent3'> </div></div>
        <div className='skillDesc4'> <div className='skillName2'> Reactjs</div> <div className='skillPercents2'>60%</div></div>
        <div className='hundred4'> <div className='Percent4'> </div></div>
        <div className='skillDesc5'> <div className='skillName2'> Bootstrap</div> <div className='skillPercents2'>90%</div></div>
        <div className='hundred5'> <div className='Percent5'> </div></div>
        <div className='skillDesc6'> <div className='skillName2'> Expressjs</div> <div className='skillPercents2'>70%</div></div>
        <div className='hundred6'> <div className='Percent6'> </div></div>
        <div className='skillDesc7'> <div className='skillName2'> MongoDB</div> <div className='skillPercents2'>60%</div></div>
        <div className='hundred7'> <div className='Percent7'> </div></div>
        </div>
        <h1 className='AboutUs'>About Me</h1>
        <h2 className='AboutDesc'> Web Developer(MERN) </h2>
        <div className='flex'>
          <div className='desc1'>
            <div className='d1'> 
            <div className='d11'> Name:</div>
            <div className='d12'> Nishant</div>
            </div>
            <div className='d1'> 
            <div className='d13'> Date of Birth:</div>
            <div className='d14'> 14/07/2000</div>
            </div>
            <div className='d1'> 
            <div className='d11'> Live in:</div>
            <div className='d16'> Delhi,India</div>
            </div>
          </div>
          <div className='desc2'>
          <div className='d1'> 
            <div className='d11'> Zip Code</div>
            <div className='d12'> 110005</div>
            </div>
            <div className='d1'> 
            <div className='d13'> Phone No.</div>
            <div className='d17'> 7701839633</div>
            </div>
            <div className='d1'> 
            <div className='d11'> Email:</div>
            <div className='d18'> khorwalnishant@gmail.com</div>
            </div>
          </div>
        </div>
        <button className='btn'>Download Cv</button>
        </div>


      
    </>
  )
}
export default About
