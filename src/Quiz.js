import React, { Component } from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    
    constructor(props) {
        super(props);
        this.state = {quiz_position: 1};
    }
    
    render(){

        const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length) ? true : false;

        if(isQuizEnd){
            return (<QuizEnd resetClickHandler={this.handleResetClick.bind(this)}/>);
        }

        return (<QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)}/>);
    }

    showNextQuestion() {
        this.setState((state, props) => ({
            quiz_position: state.quiz_position + 1
        }));
    }

    handleResetClick() {
        this.setState((state, props) => ({
            quiz_position: 1
        }));
    }
}

export default Quiz;