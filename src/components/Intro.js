import React from 'react';
import {
  Jumbotron,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

const Intro = (props) => {
    return (
        <Jumbotron>
            <Row>
                <Col>
                    <h1>Kojima Name Generator</h1>
                    <p>
                    This is a small app based on the formula created by Brian David Gilbert from Polygon,
                    which allows us to create our Hideo Kojima name. You can see the formula in <a href="https://www.polygon.com/videos/2019/11/11/20959269/unraveled-kojima-name-generator-death-stranding" target="_blank" rel="noopener noreferrer">this article</a> or watch the video ->
                    </p>
                </Col>
                <Col>
                    <p>
                        <iframe title="video" width="560" height="315" src="https://www.youtube.com/embed/t-3i6GBYvdw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </p>
                </Col>
            </Row>
            <Button variant="primary" block onClick={props.start}>Discover my Kojima Name</Button>
        </Jumbotron>
    );
};

export default Intro;
