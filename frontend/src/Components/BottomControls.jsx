import React from 'react'

const BottomControls = (props) => {
    return (
        <div className="mt-2" style={{ height: '10%' }}>
            <div className="d-flex justify-content-between">
                <select className="form-select form-select-sm" aria-label="Select Language" onChange={props.handleOnselect} style={{width: '50%'}} defaultValue={"c"}>
                    <option value="n/a">Select Language</option>
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="py">Python</option>
                </select>
                <button className="btn btn-primary" onClick={props.handleCodeRun}>Run &#38; Submit Code!</button>
            </div>
        </div>
    )
}

export default BottomControls