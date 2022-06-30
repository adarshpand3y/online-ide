import React from 'react'

const BottomControls = () => {
    return (
        <div className="mt-2" style={{ height: '10%' }}>
            <div className="d-flex justify-content-between">
                <select class="form-select form-select-sm" aria-label="Select Language" style={{width: '50%'}}>
                    <option>Select Language</option>
                    <option value="c">C</option>
                    <option selected value="cpp">C++</option>
                    <option value="py">Python</option>
                </select>
                <button className="btn btn-primary">Run &#38; Submit Code!</button>
            </div>
        </div>
    )
}

export default BottomControls