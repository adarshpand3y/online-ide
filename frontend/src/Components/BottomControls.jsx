import React from 'react'

const BottomControls = (props) => {
    return (
        <div className="mt-2" style={{ height: '10%' }}>
            <div className="d-flex justify-content-between">
                <select className="form-select form-select-sm" aria-label="Select Language" onChange={props.handleOnselect} style={{ width: '50%' }} defaultValue={"c"}>
                    <option value="n/a">Select Language</option>
                    <option value="c">C</option>
                    <option value="cpp">C++</option>
                    <option value="py">Python</option>
                    <option value="java">Java</option>
                </select>
                {/* <button className="btn btn-secondary" onClick={props.toggleTab}>Show {props.tab === "i" ? "Output" : "Input"}</button> */}
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className={`btn btn-${props.tab==="o"?"outline-":""}secondary`} onClick={() => props.toggleToInput()}>Input</button>
                    <button type="button" className={`btn btn-${props.tab==="i"?"outline-":""}secondary`} onClick={() => props.toggleToOutput()}>Output</button>
                </div>
                <button className="btn btn-secondary" onClick={props.handleCodeRun}>Run Code!</button>
            </div>
        </div>
    )
}

export default BottomControls