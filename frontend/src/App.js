import { useState } from 'react';
import './App.css';
import AnswerInput from './Components/AnswerInput';
import BottomControls from './Components/BottomControls';
import Navbar from './Components/Navbar';
import Output from './Components/Output';
import QuestionSidebar from './Components/QuestionSidebar';

function App() {

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
  const [answerValue, setAnswerValue] = useState(`#include<iostream>\nint main() {\nint a, b;\ncout<<a+b<<endl;\nreturn 0;\n}`);
  const [outputValue, setOutputValue] = useState(`/tmp/ccJiZokm.o: In function 'main':conepainting.c:(.text+0x63): undefined reference to 'sqrt'\ncollect2: ld returned 1 exit status`);
  const [language, setLanguage] = useState("cpp");

  const handleAnswerChange = event => setAnswerValue(event.target.value);

  const handleOnselect = event => setLanguage(event.target.value);

  const handleCodeRun = event => {
    console.log("Running Code");
    console.log(answerValue);
    console.log(language);
  }

  return (
    <div>
      <Navbar />
      <div className="row" style={{ width: '100%', height: '100%' }}>
        <QuestionSidebar htmlToRender={questionHtml} />
        <div className="col-md-7">
          <div className="m-2 ms-0" style={{ height: `calc(100vh - 80px)` }}>
            <AnswerInput answer={answerValue} handleAnswerChange={handleAnswerChange} />
            <Output output={outputValue} />
            <BottomControls handleOnselect={handleOnselect} handleCodeRun={handleCodeRun} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
