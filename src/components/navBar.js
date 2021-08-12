import {Link, NavLink} from 'react-router-dom';
import React from "react";


export function NavBar()
{
  
  return (
    
    <nav>
    <div class="navDiv">
      <ul>
          <li>
              <NavLink push to="/"><img src="images/logo.png"class="image1"/></NavLink>
          </li>
          
          <li>
              <NavLink class='nav-link nav-link2'push to="/">Beginner</NavLink>
          </li>
          <li>
              <NavLink class ='nav-link'push to="/">Intermediate</NavLink>
          </li>
          <li>
              <NavLink class='nav-link nav-link3' push to="/">Expert</NavLink>
          </li>
          <li>
              <NavLink  push to="/"><img class="image2"src="images/plant.png"/></NavLink>
          </li>
          
          
          
      </ul>
    </div>
</nav>

);
}

