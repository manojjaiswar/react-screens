import React from 'react'
// import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
 // let history = useHistory()
 return (
  <>
   <header>
   
    <a href="/" className='logo'><img alt="logo" src="images/Web3AssetManager_logo_1.jpg" height="50"></img></a>
    <input type="checkbox" id="menu-bar" />
    <label for="menu-bar">Menu</label>
    <nav class="navbar">
     <ul>
      <li><Link to="/footer"> Footer </Link></li>
      <li><Link to="/defiindexs"> Defiindexs </Link></li>
      <li><Link to="/latestNews"> latestNews </Link></li>
     </ul>
    </nav>
   </header>
  </>
 )
}


export default Navbar