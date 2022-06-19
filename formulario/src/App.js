import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Rotas from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Rotas />
        </Router>
      </header>
    </div>
  );
}

export default App;
