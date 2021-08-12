import logo from './logo.svg';
import './App.css';
import {Link, NavLink} from 'react-router-dom';

function App() {
  return (
    
    <nav>
    <div class="navDiv">
      <ul>
          <li>
              <NavLink class="image1" push to="/"><img src="images/logo.png"/></NavLink>
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
          
          </li>
      </ul>
    </div>
</nav>

);
  
}

export default App;
