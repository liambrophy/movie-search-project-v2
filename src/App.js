import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieSummary from "./pages/MovieSummary";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path=":id" element={<MovieSummary />}/>
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
