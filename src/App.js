import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyDrawer from "./pages/MyDrawer";
function App() {
  return (
    <Router>
      <div className="App">
     <MyDrawer/>
     </div>
    </Router>
  );
}

export default App;