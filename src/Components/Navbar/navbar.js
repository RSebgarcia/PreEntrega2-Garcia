import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import HeaderCSS from "./navbar.module.css";

function Navbar(){
    return(
            <header className="container-fluid bg-dark">
                {/* CAMBIAR POR BOTONES */}
                <nav className="row  pt-2">
                    <ul className="col-11 d-flex align-items-center"> 
                        <img src="https://images-platform.99static.com/qGtkIRPCStpBEYMpai9JdFIv-jw=/102x101:910x909/500x500/top/smart/99designs-contests-attachments/86/86805/attachment_86805525" className={HeaderCSS.img} alt="Logo"/>
                        <li><button type="button" class="btn btn-dark">Home</button></li>
                        <li><button type="button" class="btn btn-dark">Weapons</button></li>
                        <li><button type="button" class="btn btn-dark">Armor</button></li>
                        <li><button type="button" class="btn btn-dark">Magic</button></li>
                        <li><button type="button" class="btn btn-dark">Misc</button></li>
                    </ul>
                    <div className="col-1">
                        <CartWidget/>
                    </div>
                </nav>
            </header>
    )
}

export default Navbar;