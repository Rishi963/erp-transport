import React from 'react';
import Sidebarcomponent from '../Sidebarcomponent/Sidebarcomponent';
import avatar from '../../Images/superhero.png';

export default function Navbarcomponent() {
  return (
    <div>
 
     
    <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
        <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
          
        </a>
        
        <a href="/" className=" flex-shrink-0">
          {/* <i className="fa fa-bars" /> */}
         
          <span className="d-none d-lg-inline-flex"> Prathyusha Engineering Colege</span>

        </a>
        
        <div className="d-none d-md-flex ms-4">
        {/* <h2 className="text-primary mb-0">Dzentor</h2> */}
        </div>
       
        <div className="navbar-nav align-items-center ms-auto">
          
         
          <div className="nav-item dropdown">
            <a href="/" className="nav-link " >
            <span className="d-none d-lg-inline-flex">Welcome !</span>
             <img className="rounded-circle me-lg-2" src={avatar} alt="" style={{width: '40px', height: '40px'}} />
             
            </a>
           
          </div>
        </div>
      </nav>
      </div>
  )
}
