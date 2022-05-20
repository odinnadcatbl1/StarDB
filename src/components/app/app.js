import React, { Component } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';
import PeoplePage from '../pages/people-page';
import StarshipsPage from '../pages/starships-page';
import PlanetsPage from '../pages/planets-page';
import { StarshipDetails } from '../sw-components';
import LoginPage from '../pages/login-page';
import SecretPage from '../pages/secret-page';

import './app.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({isLoggedIn: true});
  }

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      
      return {
        swapiService: new Service()
      };
    }); 
  }; 

  Secret = () => {
    const {isLoggedIn} = this.state;
    return (<SecretPage isLoggedIn={isLoggedIn}/>);
  };

  Login = () => {
    const {isLoggedIn} = this.state;
    return (<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>)
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange}/>
              <RandomPlanet updateInterval={10000}/>
              
              <Routes>
                <Route path="/" element={<h2>Welcome to StarDB</h2>} exact/>
                <Route path="/people/" element={<PeoplePage/>}/>
                <Route path="/people/:id" element={<PeoplePage/>}/>
                <Route path="/planets" element={<PlanetsPage/>}/>
                <Route path="/starships" element={<StarshipsPage/>}/>
                <Route path="/starships/:id" element={<StarshipDetails/>}/>
                <Route path="/login" element={<this.Login/>}/>
                <Route path="/secret" element={<this.Secret/>}/>
                <Route path="*" element={<h2>Page not found</h2>}/>
              </Routes>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
