import React from 'react';
import { Thumbnail, Col } from 'react-bootstrap';
const GetFlickr = props => (
    <Col xs={6} md={4}>
    <Thumbnail src={props.url} alt="242x200">
        <h3>Thumbnail label</h3>
        <p>Description</p>
    </Thumbnail>
    </Col>
);

export default GetFlickr;