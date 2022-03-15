import React,{useState,useEffect} from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    if(localStorage.getItem('token')){
        return (
            <>
               <Nav className="nav">
                <NavMenu>
    
                    <NavLink to='/' activeStyle={{ color:'black' }}>
                        Logged In as:  {localStorage.getItem('username')} 
                    </NavLink> 
    
    
                    <NavBtn>
                        <NavBtnLink to="/signout">Sign Out</NavBtnLink>                
                    </NavBtn>

                    <NavBtn>
                        <NavBtnLink to="/signup">Create an Account</NavBtnLink>                
                    </NavBtn>
                </NavMenu> 
               </Nav> 
            </>
        );
    }
    else{
        return (
            <>
               <Nav className="nav">
                <NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">Log In</NavBtnLink>                
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/signup">Create an Account</NavBtnLink>                
                    </NavBtn>
                </NavMenu> 
               </Nav> 
            </>
        );
    }
    
};
export default Navbar;