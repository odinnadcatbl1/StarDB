import React from 'react';
import ItemList from '../item-list/item-list';
import withData from '../hoc-helper/with-data';
import withSwapiService from '../hoc-helper/with-swapi-service';
import withChildFunction from '../hoc-helper/with-child-function';

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name}) => <span>{name} ({model})</span>;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderName)),
                    mapPersonMethodsToProps);

const PlanetList =  withSwapiService(
                      withData(
                        withChildFunction(ItemList, renderName)),
                    mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
                        withData(
                          withChildFunction(ItemList, renderModelAndName)),
                     mapStarshipMethodsToProps);                      
                      

export {
  PersonList,
  PlanetList,
  StarshipList
};
