import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import GetFlickrList from './components/GetFlickrList';

export default class App extends Component {
  
  /*Super() is called to allow 'this' to be used inside the constructor */
  constructor() {
    super();
    this.state = {
      flickrs: []
    };
  }
  

  componentDidMount() {
    axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1')
    .then(response => {
      this.setState({
        flickrs: response.data.items
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render() {
    console.log(this.state.flickrs);
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
            <SearchForm />
          </Grid>
        </Jumbotron>
        <Grid>
            <GetFlickrList items={this.state.flickrs}/> 
        </Grid>
      </div>
    );
  }
}