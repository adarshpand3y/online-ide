import React from 'react';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

const AnswerInput = (props) => {
    return (
        <div className="form-floating" style={{ height: '60%' }}>
            {/* <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="codeInput"
                style={{ height: '100%' }}
                value={props.answer}
                onChange={props.handleAnswerChange}
            ></textarea> */}
            <AceEditor
                mode={props.languageFormatting}
                theme="dracula"
                value={props.answer}
                onChange={props.handleAnswerChange}
                id="codeInput"
                name="codeInput"
                fontSize={20}
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={true}
                editorProps={{ $blockScrolling: true }}
                style={{ height: '100%', width: '100%' }}
                setOptions={{
                    enableBasicAutocompletion: false,
                    enableLiveAutocompletion: true,
                    enableSnippets: false,
                    showLineNumbers: true,
                    tabSize: 4,
                }}
            />
            {/* <label htmlFor="codeInput">Write your code here</label> */}
        </div>
    )
}

export default AnswerInput;