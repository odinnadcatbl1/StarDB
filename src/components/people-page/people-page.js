import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import ErrorBoundry from '../error-boundry/error-boundry';

import './people-page.css';
export default class PeoplePage extends Component {

  swapiService = new SwapiService();
  
  state = {
    selectedItem: 10
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {

    const itemList = (
    <ItemList onItemSelected={this.onItemSelected}
    getData={this.swapiService.getAllPeople}
    renderItem={({name, gender, birthYear}) => (
      `${name} (${gender},  ${birthYear})`)}
    />);

    const itemDetails = (
      <ErrorBoundry>
          <ItemDetails itemId={this.state.selectedItem} />
      </ErrorBoundry>
    );

    return ( 
      <Row left={itemList} right={itemDetails} />
    );
  }
}
