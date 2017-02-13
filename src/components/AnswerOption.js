import React from 'react';

function AnswerOption(props) {

    return (
        <li className="answerOption">
            <input
                type="radio"
                className="radioCustomButton"
                name="radioGroup"
                checked={props.answerValue === parseInt(props.answer, 10)}
                id={props.answerValue}
                value={props.answerValue}
                disabled={props.answer}
                onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={props.answerValue}>
                {props.answerContent}
            </label>
        </li>
    );
}

AnswerOption.propTypes = {
    answerContent: React.PropTypes.string.isRequired,
    answerValue: React.PropTypes.number.isRequired,
    answer: React.PropTypes.string.isRequired,
    onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;