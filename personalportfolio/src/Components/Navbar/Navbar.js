import {React,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css';
import {
  Link
} from "react-router-dom";

function Navbar() {
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
    <div className='container'>
        <div className='part1'>
             <h2> Portfolio. </h2>
             <div className='middle'>
             <div className='heading'>WebDeveloper(Mern & Bootstrap)</div>
             <h1> I'm Nishant</h1>
             <h1> Khorwal</h1>
             <div className='inline'>
             <div className='MoreAboutMe'> More About me <FontAwesomeIcon icon={faArrowRightLong} /></div>
             <div className='HireMe'> Hire Me <FontAwesomeIcon icon={faArrowRightLong} /></div>
             </div>
             </div>
        </div>
        <div className='part2'>
        <div className= {showList ? "open ul li":"list ul li"}> 
                  <ul className='ul'>
                      <li className='li'>
                        <Link className="noLine"  to='/'>Home </Link></li>
                      <li className='li'>
                        <Link className='noLine'  to="/about">About</Link> </li>
                        
                      <li className='li'><Link target = "_blank"className='noLine'  to="http://localhost:80">Projects</Link></li>
                      <li className='li'>Cv</li>
                      <li className='li'> <Link className='noLine'  to="/contact">Contact</Link></li>
                  </ul> 
             </div>
             <img src='dev.png' alt=''/>
             
             <span className={showCross? "noBar":"bars"} onClick= {()=>{
              OpenList();
              NoBar();
              NoCross();
             }}><FontAwesomeIcon icon={faBars} /></span>
             <span className={showBar ? "cross":'noBar'} onClick={()=>{
              NoCross();
              OpenList();
              NoBar();
            }}><FontAwesomeIcon icon={faXmark} /></span>
             
        </div>
    </div>
  )
}

export default Navbar
