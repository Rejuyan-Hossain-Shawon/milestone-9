import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const News = (props) => {
    const { author, title, description, urlToImage, url } = props.news;


    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={urlToImage} />
                <Card.Body>
                    <Card.Title>{title.slice(0, 50)}</Card.Title>
                    <p><small>{author}</small></p>
                    <Card.Text>
                        {description.slice(0, 100)}
                    </Card.Text>
                    <a href={url} ><Button>See More</Button></a>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default News;