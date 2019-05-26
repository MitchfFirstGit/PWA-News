import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import  {Business} from './Components/Business/Business';
import  {Health} from './Components/Health/Health';
import  {Home} from './Components/Home/Home';
import  {Science} from './Components/Science/Science';
import  {Sport} from './Components/Sport/Sport';
import  {Tech} from './Components/Tech/Tech';


function App() {
  // basename={process.env.PUBLIC_URL}
  return (
      <HashRouter  >
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Sport/">Sport</Link>
              </li>
              <li>
                <Link to="/Tech/">Tech</Link>
              </li>
              <li>
                <Link to="/Business/">Business</Link>
              </li>
              <li>
                <Link to="/Science/">Science</Link>
              </li>
              <li>
                <Link to="/Health/">Health</Link>
              </li>
            </ul>
          </nav>




          <Route path="/" exact component={Home} />
          <Route path="/Sport/" component={Sport} />
          <Route path="/Tech/" component={Tech} />
          <Route path="/Business/" component={Business} />
          <Route path="/Science/" component={Science} />
          <Route path="/Health/" component={Health} />
        </div>
      </HashRouter>
  );
}
// function App() {
//   return (
//     <div className="App">
//       {/*<header className="App-header">*/}
//       {/*  <img src={logo} className="App-logo" alt="logo" />*/}
//       {/*  <p>*/}
//       {/*    Edit <code>src/App.js</code> and save to reload.*/}
//       {/*  </p>*/}
//       {/*  <a*/}
//       {/*    className="App-link"*/}
//       {/*    href="https://reactjs.org"*/}
//       {/*    target="_blank"*/}
//       {/*    rel="noopener noreferrer"*/}
//       {/*  >*/}
//       {/*    Learn React*/}
//       {/*  </a>*/}
//       {/*</header>*/}
//     </div>
//   );
// }

export default App;
