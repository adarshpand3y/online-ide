import React from 'react';

const AnswerInput = (props) => {
    return (
        <div className="form-floating" style={{ height: '60%' }}>
            <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="codeInput"
                style={{ height: '100%' }}
                value={props.answer}
                onChange={props.handleAnswerChange}
            ></textarea>
            <label htmlFor="codeInput">Write your code here</label>
        </div>
    )
}

export default AnswerInput;