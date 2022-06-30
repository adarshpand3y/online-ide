import React from 'react'

const Output = (props) => {
    return (
        <div className="form-floating my-2" style={{ height: '30%' }}>
            <textarea tabIndex={-1} className="form-control" placeholder="Your Output is shown here." id="codeOutput" style={{ height: '100%' }} value={props.output} readOnly></textarea>
            <label htmlFor="codeOutput">Your output is shown here</label>
        </div>
    )
}

export default Output