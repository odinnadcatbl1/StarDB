import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorBoundry from '../error-boundry/error-boundry';
import SwapiService from '../../services/swapi-service';
import ItemDetails, {Record} from '../item-details/item-details';
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
    showRandomPlanet: true
  };
  
  swapiService = new SwapiService();

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

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets,
            getAllStarships } = this.swapiService;

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />


          <PersonList>
            {({name})=><span>{name}</span>}
          </PersonList>

          <PlanetList>
            {({name})=><span>{name}</span>}
          </PlanetList>

          <StarshipList>
            {({name})=><span>{name}</span>}
          </StarshipList>

        </div>
      </ErrorBoundry>
    );
  }
}
