import React from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button
} from 'react-bootstrap';

const SearchForm = () => (
    <Form inline>
    <FormGroup controlId="formInlineEmail">
      <FormControl type="search" placeholder="Search Flickr Clickr" />
    </FormGroup>
    {' '}
    <Button type="submit">
      search
    </Button>
  </Form>
);

export default SearchForm;