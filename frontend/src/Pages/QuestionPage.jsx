import React, {useState} from 'react';
import AnswerInput from '../Components/AnswerInput';
import BottomControls from '../Components/BottomControls';
import Output from '../Components/Output';
import QuestionSidebar from '../Components/QuestionSidebar';

const QuestionPage = () => {
    const [questionHtml, setQuestionHtml] = useState(`<h2>Chairs Requirement</h2>
    <p>Chef's coding class is very famous in Chefland.</p>
    <p>This year XX students joined his class and each student will require one chair to sit on. Chef already has YY chairs in his class. Determine the minimum number of new chairs Chef must buy so that every student is able to get one chair to sit on.</p>
    <h3>Input Format</h3>
    <p>The first line contains a single integer T — the number of test cases. Then the test cases follow.</p>
    <p>The first and only line of each test case contains two integers XX and YY — the number of students in the class and the number of chairs Chef already has.</p>
    <h3>Output Format</h3>
    <p>For each test case, output the minimum number of extra chairs Chef must buy so that every student gets one chair.</p>
    <h3>Constraints</h3>
    <ul>
        <li>1≤T≤1000</li>
        <li>0≤X,Y≤100</li>
    </ul>
    <h3>Sample Input</h3>
    <p>4</p>
    <p>20 14</p>
    <p>41 41</p>
    <p>35 0</p>
    <p>50 100</p>
    <h3>Sample Output</h3>
    <p>4</p>
    <p>6</p>
    <p>0</p>
    <p>35</p>
    <p>0</p>
    <h3>Explanation</h3>
    <ul>
        <li>
            <b>Test Case 1: </b> There are 2020 students in the class and Chef has 1414 chairs already. Therefore Chef must buy 66 more chairs.
        </li>
        <li>
            <b>Test Case 2: </b> There are 4141 students in the class and Chef already has exactly 4141 chairs. Therefore Chef does not need to buy any more chairs.
        </li>
        <li>
            <b>Test Case 3: </b> There are 3535 students in the class and Chef has no chairs initially. Therefore Chef must buy 3535 chairs.
        </li>
    </ul>`);
    const [answerValue, setAnswerValue] = useState(`#include<stdio.h>\n\tint main() {\n\tprintf("Hello World\\n");\n\treturn 0;\n}`);
    const [outputValue, setOutputValue] = useState(`Your output will be shown here.`);
    const [answerStatus, setAnswerStatus] = useState(``);
    const [language, setLanguage] = useState("c");
    const [tab, setTab] = useState("o");
    const [customInput, setCustomInput] = useState("")
    const [languageMode, setLanguageMode] = useState("c_cpp");
  
    const toggleToInput = (event) => setTab("i");
    const toggleToOutput = (event) => setTab("o");
  
    const handleCustomInputChange = event => setCustomInput(event.target.value);
  
    const handleAnswerChange = event => setAnswerValue(event);
  
    const handleOnselect = event => {
      setLanguage(event.target.value);
      if(event.target.value === "c" || event.target.value === "cpp") setLanguageMode("c_cpp");
      else if (event.target.value === "java") setLanguageMode("java");
      else setLanguageMode("python");
    };
  
    const handleCodeRun = async (event) => {
      const url = `http://127.0.0.1:8000/api/run`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({"language": language, "program": answerValue})
      });
      const parsedResponse = await response.json();
      setOutputValue(parsedResponse.output);
      setAnswerStatus(parsedResponse.status);
    }

  return (
    <div>
      
      <div className="row text-white" style={{ width: '100%', height: '100%' }}>
        <QuestionSidebar htmlToRender={questionHtml} />
        <div className="col-md-7">
          <div className="m-2 ms-0" style={{ height: `calc(100vh - 80px)` }}>
            <AnswerInput answer={answerValue} handleAnswerChange={handleAnswerChange} languageFormatting={languageMode} />
            <Output output={outputValue} tab={tab} customInput={customInput} handleCustomInputChange={handleCustomInputChange} answerStatus={answerStatus} />
            <BottomControls handleOnselect={handleOnselect} handleCodeRun={handleCodeRun} toggleToInput={toggleToInput} toggleToOutput={toggleToOutput} tab={tab} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuestionPage;