import React, { Component } from 'react';
import update from 'react-addons-update';
import './App.css';
import Quiz from './components/Quiz';
import quizQuestions from './api/quizQuestions';
import quizAnswers from './api/quizAnswers';
import Result from './components/Result';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            questionId: 1,
            question: '',
            questionType: '',
            answerOptions: [],
            answer: '',
            answersCount: {
                acceptance: 0,
                affection: 0,
                appreciation: 0,
                approval: 0,
                attention: 0,
                comfort: 0,
                encouragement: 0,
                respect: 0,
                security: 0,
                support: 0
            },
            isDone: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

    componentWillMount() {
        this.setState({
            question: quizQuestions[0].question,
            questionType: quizQuestions[0].type,
            answerOptions: quizAnswers
        });
    }

    setUserAnswer(answer) {
        const typeToUpdate = this.state.questionType;
        const updatedAnswersCount = update(this.state.answersCount, {
            [typeToUpdate]: {
                $apply: function (x) { return +x + +answer; }
            }
        });

        this.setState({
            answersCount: updatedAnswersCount,
            answer: answer
        });
    }

    handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            this.setState({ isDone: 'yes' });
        }
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            questionType: quizQuestions[counter].type,
            answerOptions: quizAnswers,
            answer: ''
        });
    }

    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={quizQuestions.length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }

    renderResult() {
        return (
            <Result finalCategories={this.state.answersCount} />
        );
    }

    render() {
    return (
        <div className="App">
        <div className="App-header">
            <h2>Relational Needs</h2>
        </div>
        {this.state.isDone ? this.renderResult() : this.renderQuiz()}
        </div>
    );
    }
}

export default App;
