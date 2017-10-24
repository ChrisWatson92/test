import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button
} from 'react-bootstrap';

export default class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <Form className="search-form" onSubmit={this.handleSubmit} inline>
      <FormGroup controlId="formInlineEmail">  
        
        <FormControl type="search" 
               onChange={this.onSearchChange}
               name="search" 
               placeholder="Search..." />
      </FormGroup>
        <Button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></Button>
      </Form>      
    );
  }
}