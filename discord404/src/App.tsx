import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PythonPage from "./pages/Python";
import JsPage from "./pages/JavaScript";
import PhpPage from "./pages/Php";
import JavaPage from "./pages/Java";
import CppPage from "./pages/Cpp";
import LearningMindsetPage from "./pages/LearningMindset";
import FundamentalsPage from "./pages/ProgrammingFundamentals";
import HackerPage from "./pages/HackerPage";
import PracticePage from "./pages/PracticePage";
import DevToolsPage from "./pages/DevTools";
import ProductivityPage from "./pages/Productivity";
import HowToUsePage from "./pages/HowTo";

function App() {
  return (
    <div className="App">
      <h1>404-Resource-Bunker</h1>
      <h3>
        made by{" "}
        <a href="https://discord.com/invite/9yNUd34x">
          404 Discord Group
        </a>
      </h3>

      <div className="button-grid">
        <Link to="/pages/python" className="lang-btn">Python</Link>
        <Link to="/pages/js" className="lang-btn">JavaScript</Link>
        <Link to="/pages/php" className="lang-btn">PHP</Link>
        <Link to="/pages/java" className="lang-btn">Java</Link>
        <Link to="/pages/cpp" className="lang-btn">C++</Link>
        <Link to="/pages/mindset" className="lang-btn">Learning & Mindset</Link>
        <Link to="/pages/fundamentals" className="lang-btn">Programming Fundamentals</Link>
        <Link to="/pages/hacker" className="lang-btn">Hacker</Link>
        <Link to="/pages/practice" className="lang-btn">Practice</Link>
        <Link to="/pages/devtools" className="lang-btn">Developer Tools</Link>
        <Link to="/pages/productivity" className="lang-btn">Productivity & Open Source</Link>
        <Link to="/pages/howtouse" className="lang-btn">How to Use</Link>
      </div>

      <Routes>
        <Route path="/pages/python" element={<PythonPage />} />
        <Route path="/pages/js" element={<JsPage />} />
        <Route path="/pages/php" element={<PhpPage />} />
        <Route path="/pages/java" element={<JavaPage />} />
        <Route path="/pages/cpp" element={<CppPage />} />
        <Route path="/pages/mindset" element={<LearningMindsetPage />} />
        <Route path="/pages/fundamentals" element={<FundamentalsPage />} />
        <Route path="/pages/hacker" element={<HackerPage />} />
        <Route path="/pages/practice" element={<PracticePage />} />
        <Route path="/pages/devtools" element={<DevToolsPage />} />
        <Route path="/pages/productivity" element={<ProductivityPage />} />
        <Route path="/pages/howtouse" element={<HowToUsePage />} />
      </Routes>
    </div>
  );
}

export default App;
