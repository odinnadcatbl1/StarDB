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

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      
      return {
        swapiService: new Service()
      };
    }); 
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>
            <RandomPlanet updateInterval={10000}/>
            <PeoplePage/>
            <PlanetsPage/>
            <StarshipsPage/>
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
