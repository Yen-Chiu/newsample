import React, { Component } from "react";
import FormBtn from "../Form/FormBtn";
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
                <FormBtn />
            </div>
        )
    }
};

export default Register;