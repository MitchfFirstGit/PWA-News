import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import  {Startups} from './Components/Startups/Startups';
import  {Health} from './Components/Health/Health';
import  {Home} from './Components/Home/Home';
import  {Food} from './Components/Food/Food';
import  {Sport} from './Components/Sport/Sport';
import  {Tech} from './Components/Tech/Tech';
import { slide as Menu } from 'react-burger-menu'
import './App.scss';
import {Item} from "./Components/Item/Item";

class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    closeMenu () {
        this.setState({menuOpen: false})
    }
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})
    }


    render () {
        return (
            <HashRouter>

                <Menu isOpen={this.state.menuOpen}
                      onStateChange={(state) => this.handleStateChange(state)}>
                    <Link to="/" onClick={() => this.closeMenu()}>Home</Link>
                    <Link to="/Sport/" onClick={() => this.closeMenu()}>Sport</Link>
                    <Link to="/Tech/" onClick={() => this.closeMenu()}>Tech</Link>
                    <Link to="/Startups/" onClick={() => this.closeMenu()}>Startups</Link>
                    <Link to="/Food/" onClick={() => this.closeMenu()}>Food</Link>
                    <Link to="/Health/" onClick={() => this.closeMenu()}>Health</Link>
                    <Link onClick={() => this.closeMenu()}>Install News App</Link>
                </Menu>
                <div className='wrap'>
                    <img src={require('./assets/inverted-offline.png')} alt='' style={{height: 50, marginRight: 10}}/>
                    Progressive News App
                </div>
                    <Route path="/" exact component={Home} />
                    <Route path="/Sport/" component={Sport} />
                    <Route path="/Tech/" component={Tech} />
                    <Route path="/Startups/" component={Startups} />
                    <Route exact path="/Food/" component={Food} />
                    <Route path="/Food/:id" render={(props) => <Item {...props} />} />
                    <Route path="/Health/" component={Health} />


            </HashRouter>

        );
    }
}
export default App;


//
// <a id="home" className="menu-item" href="/">Home</a>
// <a id="about" className="menu-item" href="/about">About</a>
// <a id="contact" className="menu-item" href="/contact">Contact</a>
// <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>




//
//
// function App() {
//
//   return (
//       <HashRouter  >
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/Sport/">Sport</Link>
//               </li>
//               <li>
//                 <Link to="/Tech/">Tech</Link>
//               </li>
//               <li>
//                 <Link to="/Startups/">Startups</Link>
//               </li>
//               <li>
//                 <Link to="/Food/">Food</Link>
//               </li>
//               <li>
//                 <Link to="/Health/">Health</Link>
//               </li>
//             </ul>
//           </nav>
//           <Route path="/" exact component={Home} />
//           <Route path="/Sport/" component={Sport} />
//           <Route path="/Tech/" component={Tech} />
//           <Route path="/Startups/" component={Startups} />
//           <Route path="/Food/" component={Food} />
//           <Route path="/Health/" component={Health} />
//         </div>
//       </HashRouter>
//   );
// }
//
//
// export default App;
