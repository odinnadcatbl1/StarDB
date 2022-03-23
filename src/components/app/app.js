import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import ItemDetails, {Record} from '../item-details/item-details';

import { SwapiServiceProvider } from '../swapi-service-context/swapi-service-context';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList
} from '../sw-components/index';


import './app.css';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    swapiService: new DummySwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      
      return {
        swapiService: new Service()
      };
    }); 
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange}/>

            <PersonDetails itemId={5} />
            <PlanetDetails itemId={5} />
            <StarshipDetails itemId={9} />

            <PersonList />
            <PlanetList />
            <StarshipList />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
