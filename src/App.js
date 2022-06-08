import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import "./styles.css";

//Components
import LandingPage from "./components/LandingContainer/LandingPage";
import CodeFastContainer from "./components/CodeFastContainer/CodeFastContainer";
import CodeBlueContainer from "./components/CodeBlueContainer/CodeBlueContainer";
import StemiContainer from "./components/StemiContainer/StemiContainer";
import LogContainer from "./components/LogContainer/LogContainer";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/codeFast" element={<CodeFastContainer />} />
          <Route path="/codeBlue" element={<CodeBlueContainer />} />
          <Route path="/stemi" element={<StemiContainer />} />
          <Route path="/log" element={<LogContainer />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
