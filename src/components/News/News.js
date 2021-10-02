import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './News.css'

const News = (props) => {
    return (
        <Col>
      <Card>
        <Card.Img variant="top" src={props.news.urlToImage} />
        <Card.Body>
          <Card.Title>{props.news.title}</Card.Title>
          <Card.Text>
            {props.news.content}
          </Card.Text>
          <p>Author: {props.news.author}</p>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default News;