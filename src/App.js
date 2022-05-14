import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/"><LandingPage/></Route>
        <Route path="/codeFast"><CodeFastContainer/></Route>
        <Route path="/codeBlue"><CodeBlueContainer/></Route>
        <Route path="/log"><LogContainer/></Route>
      </Router>
    </div>
  );
}

export default App;
