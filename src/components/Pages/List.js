import React, { Component } from "react";
import Nav from "../Nav/Nav";
import {Col, Row, Container} from "../Grid";
import { Link } from "react-router-dom";
import Initial from "../Pages/Initial";


class List extends Component {
    render() {
        return (
            <div>
                <p>Please choose a page</p>
                <ul>
                    <li><Link to="/" component={Initial}>Initial</Link></li>
                </ul>
            </div>
        )
    }
}

export default List;