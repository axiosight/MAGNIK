import React, { Component } from 'react';
import { Jumbotron, Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Image, Row, Card } from 'react-bootstrap';
import Bimage from '../Home/Img/h1.jpg';
import jum from '../Home/Img/jum1.jpg';
import '../Home/Home.css';
import { InfoPanel } from './InfoPanel';
import { Footer } from '../../General/Footer';

const imgStyle = {
    height: '250px',
    objectFit: 'cover',
    boxShadow: '5px 5px 10px #cccccc'
}

export class Home extends Component {
    static displayName = Home.name;

    renderJumbotron() {
        return (
            <Jumbotron className="jumbotron-fluid mb-3 jumbotron-image" style={{ backgroundImage: `url(${jum})` }}>
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
                    <Card className="p-3 mb-2 bg-white rounded" style={{ width: '100%', boxShadow: '5px 5px 10px #cccccc' }}>
                        <Image src={Bimage} className="card-img-top" style={imgStyle} alt="Image" />
                        <Card.Body>
                            <Card.Title><h5>Would you like to become the person who loves taking care of pets?</h5></Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"><h6>If so, we suggest you become part of our growing family.</h6></Card.Subtitle>
                            <Card.Text>Everyone can become a caregiver for different pets: whether it be a caring zoo lover or just a person who
                                 wants to earn some money in their free time. It all depends on your desire and time.</Card.Text>
                            <NavLink target="_blank" className="card-link" style={{ float: 'right', fontSize: '14pt' }} tag={Link} to="/register">♡ Become a sitter</NavLink>
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
                    <hr />
                    <div className="text-center display-4" style={{ fontSize: '22pt' }}><strong>About Our Services</strong></div>
                    <hr />
                    <InfoPanel />
                </Container>
                <Footer />
            </div>
        );
    }
}