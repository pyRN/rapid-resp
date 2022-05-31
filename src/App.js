import './App.css';
import {   BrowserRouter,
  Routes,
  Route} from "react-router-dom";

//Components
import LandingPage from "./components/LandingContainer/LandingPage"
import CodeFastContainer from "./components/CodeFastContainer/CodeFastContainer"
import CodeBlueContainer from "./components/CodeBlueContainer/CodeBlueContainer"
import StemiContainer from "./components/StemiContainer/StemiContainer"
// import LogContainer from "./components/LogContainer"

export default function App() {
  return (

<BrowserRouter>
<Routes>
  <Route path="/" element={<LandingPage />}/>
  <Route path="/codeFast" element={<CodeFastContainer />}/>
  <Route path="/codeBlue" element={<CodeBlueContainer />}/>
  <Route path="/stemi" element={<StemiContainer />}/>
  {/* <Route path="/log" element={<LogContainer />}/> */}
</Routes>
</BrowserRouter>
  );
}
