import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { Startups } from './Components/Startups/Startups';
import { Health } from './Components/Health/Health';
import { Home } from './Components/Home/Home';
import { Food } from './Components/Food/Food';
import { Sport } from './Components/Sport/Sport';
import { Tech } from './Components/Tech/Tech';
import { slide as Menu } from 'react-burger-menu'
import './App.scss';
import { Article } from "./Components/Article/Article";
import styled from '@emotion/styled';

import articlesHealth from './Data/Health';
import articlesFood from './Data/Food';
import articlesSport from './Data/Sport';
import articlesStartups from './Data/Startups';
import articlesTech from './Data/Tech';

const StyledImg = styled.img`
    height: 40px ;
    width: 40px ;
    
    @media (min-width: 500px) {
        height: 50px ;
        width: 50px ;
        margin-right: 10px;
  }
`;

const StyledWrap = styled.div`
  background-color: #373A47;
  height: 75px;
    display: flex;
  justify-content: center;
  align-items: center;

`;

const StyledHeader = styled.h1`
  color: white;
  font-size: 1.3rem;
  font-family: Gabriela;
  @media (min-width: 500px) {
    font-size: 2rem;
  }
`;

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            deferredPrompt: "null"
        }
    }
    closeMenu() {
        this.setState({ menuOpen: false })
    }
    handleStateChange(state) {
        this.setState({ menuOpen: state.isOpen })
    }




    handleClick = () => {
        console.log('Added');
        this.closeMenu();
        this.state.deferredPrompt.prompt();

        this.state.deferredPrompt.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                // this.setState({
                //   deferredPrompt: 10
                // });
            });
    }

    componentDidMount() {
        console.log(this.state.deferredPrompt, "hi");
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            // deferredPrompt = e;
            console.log(e);
            this.setState({
                deferredPrompt: e
            });
        });
    }

    render() {
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
                    <Link to="/" onClick={this.handleClick} >Install News App</Link>
                </Menu>
                <StyledWrap >
                    <StyledImg src={require('./assets/inverted-offline.png')} alt='' />
                    <StyledHeader>Progressive News App</StyledHeader>

                </StyledWrap>

                <Route exact path="/" component={Home} />
                <Route exact path="/Sport/" component={Sport} />
                <Route exact path="/Tech/" component={Tech} />
                <Route exact path="/Startups/" component={Startups} />
                <Route exact path="/Food/" component={Food} />
                <Route exact path="/Health/" component={Health} />


                <Route path="/Sport/:id" render={(props) => <Article {...props} articles={articlesSport} />} />
                <Route path="/Tech/:id" render={(props) => <Article {...props} articles={articlesTech} />} />

                <Route path="/Startups/:id" render={(props) => <Article {...props} articles={articlesStartups} />} />
                <Route path="/Food/:id" render={(props) => <Article {...props} articles={articlesFood} />} />
                <Route path="/Health/:id" render={(props) => <Article {...props} articles={articlesHealth} />} />
            </HashRouter>

        );
    }
}
export default App;


