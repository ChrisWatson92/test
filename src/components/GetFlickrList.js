import React from 'react';
import GetFlickr from './GetFlickr';
import { Row } from 'react-bootstrap';

const GetFlickrList = props => {

    const results = props.items;
    let flickrs = results.map(flickr =>
        <GetFlickr url={flickr.media.m} key={flickr.author_id} />
    );

    return (
        <Row>
        {flickrs}
        </Row>
    );
}

export default GetFlickrList;