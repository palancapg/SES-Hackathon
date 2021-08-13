import { Link, NavLink } from 'react-router-dom';
import React from "react";


export function NavBar() {
    
    function closePopup(num){
        if(num == 1){
            document.getElementById("lesson-Details1").classList.toggle("active")
        }
        else if(num == 2){
            document.getElementById("lesson-Details2").classList.toggle("active")
        }
        else if(num == 3){
            document.getElementById("lesson-Details3").classList.toggle("active")
        }
        else{
            document.getElementById("lesson-Details4").classList.toggle("active")
        }
        document.getElementById("transparent-overlay").classList.toggle("active")
    }


    function showCard()
    {
        document.querySelector("table").style.display="block";
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
                            <NavLink class='nav-link nav-link2' push to="/"onClick={() => showCard()}><b>Beginner</b></NavLink>
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
            <table className="center table">
                <tr>

                    <td>
                        <div className="up card" onClick={() => closePopup(1)}> 
                            <div class="container">
                            <img className="image" src="images/capital-one.jpg" alt="Picture of Debit Card"></img>
                                <h4><b>What is a debit card?</b></h4> 
                            </div>
                        </div>
                
                        <div className="lessonDetails">
                                <div className="popUp" id="lesson-Details1" >
                                    <button data-close-button className="close-btn" onClick={() => closePopup(1)}>&times;</button>   
                                    <h1>What is a debit card?</h1>
                                    <t1>A debit card is associated with a checking account and they let you directly access and use the money currently in your account (unlike a credit card)
                                    </t1>
                                    <img className="image" src="images/capital-one.jpg" alt="Picture of Debit Card"></img>
                                </div>
                                <div className="overlay" id="transparent-overlay"></div>
                        </div>
                    </td>

                    <td>
                        <div className="down card" onClick={() => closePopup(2)}> 
                            <div class="container">
                            <img className="image" src="images/atm.png" alt="Picture of Women Using ATM"></img>
                                <h4><b>How to use a debit card?</b></h4> 
                            </div>
                        </div>
                
                        <div className="lessonDetails">
                                <div className="popUp" id="lesson-Details2" >
                                    <button data-close-button className="close-btn" onClick={() => closePopup(2)}>&times;</button>   
                                    <h1>How to use a debit card?</h1>
                                    <t1>You can use the card to make purchases directly, or you can withdraw money from an ATM using the card and a PIN number that you create when you get the card
                                        Since a debit card uses money you currently have in your account, make sure you have enough money before making a purchase
                                    </t1>
                                    <img className="image" src="images/atm.png" alt="Picture of Women Using ATM"></img>
                                </div>

                                <div className="overlay" id="transparent-overlay"></div>
                        </div>
                    </td>

                    <td>
                        <div className="up card" onClick={() => closePopup(4)}> 
                            <div class="container">
                            <img className="image" src="images/months.jpg" alt="Picture of Calendar"></img>
                                <h4><b>How to check debit card history?</b></h4> 
                            </div>
                        </div>
                
                        <div className="lessonDetails">
                                <div className="popUp" id="lesson-Details4" >
                                    <button data-close-button className="close-btn" onClick={() => closePopup(4)}>&times;</button>   
                                    <h1>How to check debit card history?</h1>
                                    <t1>You typically get a statement every month telling you how much, where, and when you spent money
                                    </t1>
                                    <img className="image" src="images/months.jpg" alt="Picture of Calendar"></img>
                                </div>
                                
                                <div className="overlay" id="transparent-overlay"></div>
                        </div>
                    </td>
                
                    <td>
                        <div className="down card" onClick={() => closePopup(3)}> 
                            <div class="container">
                            <img className="image" src="images/happy kids.jpg" alt="Picture of Calendar"></img>
                                <h4><b>Why choose a debit card?</b></h4> 
                            </div>
                        </div>
                
                        <div className="lessonDetails">
                                <div className="popUp" id="lesson-Details3" >
                                    <button data-close-button className="close-btn" onClick={() => closePopup(3)}>&times;</button>   
                                    <h1>Why choose a debit card?</h1>
                                    <t1>Since you’re not borrowing anything, there is no interest charge
Many times there is no fee for losing a card, and make sure to lock your card and report it if you do
It helps teach budgeting skills because you can only spend money you currently have (unlike a credit card)
                                    </t1>
                                    <img className="image" src="images/happy kids.jpg" alt="Picture of Calendar"></img>
                                </div>
                                <div className="overlay" id="transparent-overlay"></div>
                        </div>
                    </td>

                </tr>
            </table>
        </div>


    );
}
