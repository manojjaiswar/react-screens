import React from 'react';
import { Link } from "react-router-dom";
const Footer = () => {
 return (
  <div id='bottom-footer'>

    <div className="p-grid p-ml-0 p-mr-0 p-card-footer">
     <div className="p-col-10 p-offset-1 ">
      <div className="p-grid">
       <div className="p-col-12 p-sm-2 p-md-2 p-lg-2 p-mt-3">
        <Link className="c-link-class" to='/'>About</Link>
        <br />
        <Link className="c-link-class" to='/'>Privacy</Link><br />
        <Link className="c-link-class" to='/'>Terms of Service</Link><br />
        <Link className="c-link-class" to='/'>CCPA</Link>

       </div>
       <div className="p-col-12 p-sm-8 p-md-8 p-lg-8 p-text-center">
        <h3 className="p-mb-3">Communities</h3>
        <button className="p-button p-button-rounded p-button-secondary p-button-icon-only p-m-1" >
         <i className="p-button-icon pi pi-twitter"></i>
        </button>
        <button className="p-button p-button-rounded p-button-secondary p-button-icon-only p-m-1">
         <i className="p-button-icon  pi pi-discord"></i>
        </button>
        <button className="p-button p-button-rounded p-button-secondary p-button-icon-only p-m-1">
         <i className="p-button-icon  pi pi-linkedin"></i>
        </button>
       </div>
       <div className="p-col-12 p-sm-2 p-md-2 p-lg-2">
        <h3 className="p-mb-2">Learn</h3>
        <Link className="c-link-class" to='/'> Documentation</Link><br />
        <Link className="c-link-class" to='/'> Medium</Link>
       </div>
      </div>
     </div>
    </div>
  </div>
 )

}

export default Footer;