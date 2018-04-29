import React, {Component} from "react";
import {Col, Row, Container} from "../Grid";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";


class Login extends Component {
    constructor() {
        super();

    this.state = {
        username: "",
        password: "",
        email: "",
        active: false
    }
    }

    handleChange(event) {
        console.log(`this is handle Change function in login`);

        this.setState({
            [event.target.name]: event.target.value,
            active: true,
            [event.target.password]: event.target.value,
            [event.target.email]: event.target.value
        });
    }

    handleLogin(event) {
        console.log(`Submit Button fired!`);
        ///axios.get('/api route').then(data)
        window.location = "http://localhost:3000/profile"
    }

    render() {
        return (
            <div>
                <Col size="md-12">
                <Nav />
                </Col>
                <h2>Login Page</h2>
                <h5>{this.state.username}</h5>
                    <div>
                    <input
                        type="text"
                        placeholder="Customer Name"
                        name="username"
                        value={this.state.username}
                        required
                        onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange.bind(this)} />
                    </div>
                    <div>
                    <input
                        type="text"
                        placeholder="ExampleEmail@hotmail.com"
                        name="email"
                        value={this.state.email}
                        required
                        onChange={this.handleChange.bind(this)} />
                    </div>
                    <h5>{this.state.email}</h5>
                    <button onClick={this.handleLogin.bind(this)}>Submit</button>
            </div>
        )
    }
}

export default Login;