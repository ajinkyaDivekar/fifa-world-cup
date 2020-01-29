import React, { Component } from 'react'
import FeatureTab from './featureTab';
import FeaturesRoute from './featuresRoute';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import './index.scss';
import ErrorBoundaries from './ErrorBoundaries';

const Features = () => {
  return (
    <div id="features" className="container">
    <Row>
      <Col sm={2}>
        <FeatureTab />
      </Col>
      <Col sm={10}>
        <ErrorBoundaries >
          <FeaturesRoute />
        </ErrorBoundaries>
      </Col>
    </Row>
    </div>
  );
}

export default Features;

