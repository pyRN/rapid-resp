import './App.css';
import {   BrowserRouter,
  Routes,
  Route} from "react-router-dom";

//Components
import LandingPage from "./components/LandingContainer/LandingPage"
// import CodeFastContainer from "./components/CodeFastContainer"
// import CodeBlueContainer from "./components/CodeBlueContainer"
// import LogContainer from "./components/LogContainer"

export default function App() {
  return (

<BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage />}/>
  {/* <Route path="/codeFast" element={<CodeFastContainer />}/>
  <Route path="/codeBlue" element={<CodeBlueContainer />}/>
  <Route path="/log" element={<LogContainer />}/> */}
</Routes>
</BrowserRouter>
  );
}
