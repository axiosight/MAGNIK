import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Image, Row, Card } from 'react-bootstrap';
import Bimage from '../Home/Img/1.png';
import jum from '../Home/Img/jum1.jpg';
import '../Home/Home.css';
import { InfoPanel } from './InfoPanel';
import { Footer } from '../../General/Footer';

const imgStyle = {
    height: '150px',
    objectFit: 'cover'
}

export class Home extends Component {
    static displayName = Home.name;

    renderJumbotron() {
        return (
            <Jumbotron className="jumbotron-fluid mb-3 jumbotron-image" style={{backgroundImage: `url(${jum})`}}>
                <Container>
                    <h1 className="display-4">Magnik™</h1>
                    <p className="lead">Is it possible to throw pets? If you got a cat, a dog, no matter who, they become a member of the family! This is the same as throwing your child into the street!</p>
                </Container>
            </Jumbotron>
        );
    }

    renderCard() {
        return (
            <Row className="row">
                <div className="col-lg-12">
                    <Card className="shadow p-3 mb-4 bg-white rounded" style={{ width: '100%', boxShadow: '5px 5px 10px #cccccc' }}>
                        <Image src={Bimage} className="card-img-top" style={imgStyle} alt="Image"/>
                        <Card.Body>
                            <Card.Title><h5>dfghj</h5></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><h6>by dsfgh</h6></Card.Subtitle>
                            <Card.Text><p>sdfghjgu</p></Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Row >
        );
    }

    render() {
        return (
            <div>
                {this.renderJumbotron()}
                <Container>
                    {this.renderCard()}
                    <InfoPanel/>
                </Container>
                <Footer/>
            </div>
        );
    }
}