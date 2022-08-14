import Navbar from './Components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import QuestionPage from './Pages/QuestionPage';
import Homepage from './Pages/Homepage';
import InstructionsPage from './Pages/InstructionsPage';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/instructions" element={<InstructionsPage />} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
