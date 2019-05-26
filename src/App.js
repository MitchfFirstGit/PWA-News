import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import  {Business} from './Components/Business/Business';
import  {Health} from './Components/Health/Health';
import  {Home} from './Components/Home/Home';
import  {Science} from './Components/Science/Science';
import  {Sport} from './Components/Sport/Sport';
import  {Tech} from './Components/Tech/Tech';
import { slide as Menu } from 'react-burger-menu'
import './App.scss';
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
                    <Link to="/Business/" onClick={() => this.closeMenu()}>Business</Link>
                    <Link to="/Science/" onClick={() => this.closeMenu()}>Science</Link>
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
                    <Route path="/Business/" component={Business} />
                    <Route path="/Science/" component={Science} />
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
//                 <Link to="/Business/">Business</Link>
//               </li>
//               <li>
//                 <Link to="/Science/">Science</Link>
//               </li>
//               <li>
//                 <Link to="/Health/">Health</Link>
//               </li>
//             </ul>
//           </nav>
//           <Route path="/" exact component={Home} />
//           <Route path="/Sport/" component={Sport} />
//           <Route path="/Tech/" component={Tech} />
//           <Route path="/Business/" component={Business} />
//           <Route path="/Science/" component={Science} />
//           <Route path="/Health/" component={Health} />
//         </div>
//       </HashRouter>
//   );
// }
//
//
// export default App;
