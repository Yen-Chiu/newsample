import React, { Component } from "react";
import Input from "../Form/Input";
import TextArea from "../Form/TextArea";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";


class Register extends Component {
    render() {
        return (
            <div>
                <Nav />
                <h4>Register Page</h4>
                <Input />
                <TextArea />
            </div>
        )
    }
};

export default Register;