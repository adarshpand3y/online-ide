import React from 'react'

const Output = (props) => {
    return (
        <div style={{ height: '30%' }}>
            {
                props.tab === "o" ?
                    <div className="form-floating my-2" style={{ height: '100%' }}>
                        <textarea tabIndex={-1} className={`form-control ${props.answerStatus===""?"":props.answerStatus==="correct"?"is-valid":"is-invalid"}`} placeholder="Your Output is shown here." id="codeOutput" style={{ height: '100%' }} value={props.output} readOnly></textarea>
                        <label htmlFor="codeOutput">Your output is shown here</label>
                    </div>
                    :
                    <div className="form-floating my-2" style={{ height: '100%' }}>
                        <textarea tabIndex={-1} className={`form-control`} placeholder="Enter your custom input" id="customInput" style={{ height: '100%' }} value={props.customInput} onChange={props.handleCustomInputChange} ></textarea>
                        <label htmlFor="customInput">Enter your custom input</label>
                    </div>
            }

        </div>
    )
}

export default Output