import { Link, NavLink } from 'react-router-dom';
import React from "react";


export function NavBar() {
    
    function closePopup(){
        document.getElementById("lesson-Details").classList.toggle("active")
        document.getElementById("transparent-overlay").classList.toggle("active")
    }

    return (
        <div>
            <nav>
                <div class="navDiv">
                    <ul>
                        <li class='Captial'>
                            <NavLink push to="/"><img src="images/logo.png" class="image1" /></NavLink>
                        </li>

                        <li class='nav1'>
                            <NavLink class='nav-link nav-link2' push to="/"><b>Beginner</b></NavLink>
                        </li>
                        <li class='nav1'>
                            <NavLink class='nav-link' push to="/"><b>Intermediate</b></NavLink>
                        </li>
                        <li class='nav1'>
                            <NavLink class='nav-link nav-link3' push to="/"><b>Expert</b></NavLink>
                        </li>
                        {/* <li class='tree'>
                            <NavLink push to="/"><img class="image2" src="images/plant.png" /></NavLink>
                        </li> */}
                    </ul>
                </div>
            </nav>
            
            <div className="center card" onClick={() => closePopup()}> 
                <div class="container">
                    <h4><b>What is a debit card?</b></h4> 
                </div>
            </div>

            <div className="lessonDetails">
                    <div className="popUp" id="lesson-Details" >
                        <button data-close-button className="close-btn" onClick={() => closePopup()}>&times;</button>   
                        <h1>Test</h1>
                    </div>
                    <div className="overlay" id="transparent-overlay"></div>
            </div>
        </div>


    );
}
