import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import HeaderCSS from "./NavBar.module.css";
import {NavLink} from "react-router-dom"


const NavBar = () => {


    return(
            <header className="container-fluid bg-dark">
                <nav className="row  pt-2">
                    <div className="col-11 d-flex align-items-center"> 
                        <img src="https://images-platform.99static.com/qGtkIRPCStpBEYMpai9JdFIv-jw=/102x101:910x909/500x500/top/smart/99designs-contests-attachments/86/86805/attachment_86805525" className={HeaderCSS.img} alt="Logo"/>
                        <NavLink to={"/"}><button type="button" className="btn btn-dark">Home</button></NavLink >
                        <NavLink to={"/type/Weapon"}><button type="button" className="btn btn-dark">Weapons</button></NavLink >
                        <NavLink to={"/type/Armor"}><button type="button" className="btn btn-dark">Armor</button></NavLink >
                        <NavLink to={"/type/Magic"}><button type="button" className="btn btn-dark">Magic</button></NavLink >
                        <NavLink to={"/type/Misc"}><button type="button" className="btn btn-dark">Misc</button></NavLink >
                    </div>
                    <div className="col-1">
                        <CartWidget/>
                    </div>
                </nav>
            </header>
    )
}

export default NavBar;