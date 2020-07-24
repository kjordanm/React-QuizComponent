import React, { Component } from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component{

    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer : false
        } 
    }

    render() {
        const options = this.props.quiz_question.answer_options.map((option, index) => <QuizQuestionButton button_text={option} key={index} clickHandler={this.handleClick.bind(this)}/>);

        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                <ul>
                    {options}
                </ul>
                </section>
                { this.state.incorrectAnswer === true ? <p className='error'>Sorry, that's not right</p> : null } 
            </main>
        );
    }

    handleClick(buttonText) {
        if(buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            this.setState((state, props) => {
                state.incorrectAnswer = false;
            })
        }

        this.setState((state, props) => {
            state.incorrectAnswer = true;
        })
    }
}

export default QuizQuestion;