import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css";

const Header = () => {

   return(
    <header className="header">
        <div>
            <h1>
                <Link to="/" className="logo">
                   Ecommerce Shop
                </Link>
            </h1>
        </div>
        <div className='header-Links'>
             <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
             </ul>
             <ul>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
             </ul>
             <ul>
                <li>
                    <Link to="/cart" className='cart' >Cart</Link>
                </li>
             </ul>
        </div>
    </header>
   )

}

export default Header;