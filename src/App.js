import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  {Sport} from './Components/Sport';
import  {Technology} from './Components/Technology';
import  {Telecommunications} from './Components/Telecommunications';
function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Sport</Link>
              </li>
              <li>
                <Link to="/Technology/">Technology</Link>
              </li>
              <li>
                <Link to="/Telecommunications/">Telecommunications</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Sport} />
          <Route path="/Technology/" component={Technology} />
          <Route path="/Telecommunications/" component={Telecommunications} />
        </div>
      </Router>
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
