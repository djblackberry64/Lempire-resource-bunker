import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PythonPage from "./pages/Python";
import JsPage from "./pages/JavaScript";
import PhpPage from "./pages/Php";
import JavaPage from "./pages/Java";
import CppPage from "./pages/Cpp";

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
      </div>

      <Routes>
        <Route path="/pages/python" element={<PythonPage />} />
        <Route path="/pages/js" element={<JsPage />} />
        <Route path="/pages/php" element={<PhpPage />} />
        <Route path="/pages/java" element={<JavaPage />} />
        <Route path="/pages/cpp" element={<CppPage />} />
      </Routes>
    </div>
  );
}

export default App;
