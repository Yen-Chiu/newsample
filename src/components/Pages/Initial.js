import React, {Component} from "react";
import Nav from "../Nav/Nav";
import {Col, Row, Container} from "../Grid";
import Pane from "../Pane/Pane";
import { Link, Route } from "react-router-dom";
import Login from "../Pages/Login";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Profile from "../Pages/Profile";
import "../Pages/Initial.css";

class Initial extends Component {
    constructor() {
        super();

    this.state = {
        customer: "",
        business: ""
    }
    }
handleCustomer(event) {
    window.location = "http://localhost:3000/login";
    }

handleProvider(event) {
    this.setState({
        business: "Provider Button Fired - Subway"
    });
};

    render() {
    return (
        <div>
            <Col size="md-12">
            <Nav />
            <h4>{this.state.customer}</h4>
            <h4>{this.state.business}</h4>
            <Row size="md-12"></Row>
            <h1>Initial Page</h1>
            <Col size="md-3"></Col>
            <Col size="md-6">
            <Pane />
            <Row size="md-12">
            <button onClick={this.handleCustomer.bind(this)}>Customer</button>
            </Row>
            <Row size="md-12">
            <button onClick={this.handleProvider.bind(this)}>Service Provider</button>
            </Row>
            </Col>
            </Col>
        </div>
    )
};
};

export default Initial;
