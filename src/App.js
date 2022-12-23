import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Character } from "./pages/Character/Character";
import { Location } from "./pages/Location/Location";
import { Episodes } from "./pages/Episodes/Episodes";

function App() {
  return (
    <div className="App">
      <Header />
  <div className="container py-5">
      <Routes>
      <Route path="/" element={<Character />}/>
      <Route path="/location" element={<Location />}/>
      <Route path="/episodes" element={<Episodes />}/>
    </Routes>
  </div>
    </div>
  );
}

export default App;
