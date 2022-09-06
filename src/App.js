import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "./Screens/Homescreen";
import Bhag1Table from "./Components/Bhag1Table";
import Bhag1 from "./Components/Bhag1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/bhag1tb" element={<Bhag1Table />} />
          <Route path="/applicant-form-part-1" element={<Bhag1 />} />
          <Route path="/update-applicant-form-part-1/:id" element={<Bhag1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
