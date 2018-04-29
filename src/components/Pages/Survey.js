import React, { Component } from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";


class Survey extends Component {

    state = {
        questions: []
    }
/*
    componentDidMount() {
        axios.get('/someroute')
            .then((data) => {
                this.setState({
                    questions: data
                })
            })
    }
    
    renderQuestions() {
        if (!this.state.questions.length) {
            return null;
        }

        return this.state.questions.map((question) =>{
            return <div>
                {question.title}
            </div>;
        })
    }

    render() {
        return (
            <div>
                <Nav />
                <h2>Survey Questions</h2>
                {this.renderQuestions()}
            </div>
        )
    }
*/
}
export default Survey;