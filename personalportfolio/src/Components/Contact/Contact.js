import {React,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark,faChevronRight} from '@fortawesome/free-solid-svg-icons'
import '../Navbar/Navbar.css';
import {
    Link
  } from "react-router-dom";
import '../About/About.css';
import './Contact.css'

function Contact() {
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
        <div className='container4'>
        <h1 className='portfolio1'>Portfolio.</h1>
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
        <h2 className='about'>Contact<FontAwesomeIcon className='chevron' icon={faChevronRight} /></h2>
        <h1 className='aboutus'>Contact Us</h1>
        <div className='bigbox'>
            <div className='half1'>
                <h1>Contact Us</h1>
                <p>We're open for any suggestion or just to have a chat</p>
                <div className='details'> <div className='Address'>From</div>
                <div className='Email'>Email</div>
                <div className='Phone'>Phone No.</div>
                </div>
                <div className='moredetails'> <div className='Address'>Delhi,India</div>
                <div className='email'>khorwalnishant@gmail.com</div>
                <div className='phone'>7701839633</div>
                </div>
                <form  method= "post" class="myform"  id="Contact"> 
                 <input type="text" class="myinput" name="Name" placeholder="Name"></input>
                 <input type="text" class="myinput1" name="Name" placeholder="Email"></input>
                 <input type="text" class="myinput2" name="Name" placeholder="Subject"></input> 
                 <textarea type="text" className='myinput3' name="Name" placeholder='Enter Your Concern' rows={5}></textarea>
                 <div className='MoreAboutMe1' type="Submit"> Send a message</div>
                </form>
                <h4>Follow Me Here</h4>
                <h2 className='home'><Link target = "_blank" className="noLine" to="https://instagram.com/nishant_weeb?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="><img rel="_blank"className=' instagram' src='insta.png' alt=""></img></Link></h2>
                <h2 className='rome'><Link target = "_blank" className="noLine" to="https://www.facebook.com/nishant.khorwal.3?mibextid=ZbWKwL"><img rel="_blank"className='fb' src='fb.png' alt=""></img></Link></h2>
                <h2 className='rome'><Link target = "_blank" className="noLine" to="https://www.facebook.com/nishant.khorwal.3?mibextid=ZbWKwL"><img rel="_blank"className='linkedin' src='linkedin.png' alt=""></img></Link></h2>
                <h2 className='rome'><Link target = "_blank" className="noLine" to="https://www.facebook.com/nishant.khorwal.3?mibextid=ZbWKwL"><img rel="_blank"className=' twitter' src='twitter.png' alt=""></img></Link></h2>

            </div>

            <div className='half2'>
            <img src='delhi.jpg' alt=''/></div> 
        </div>
        </div>
        </>
  )
}

export default Contact
