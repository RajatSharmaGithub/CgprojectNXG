import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homescreen from './components/Homescreen'
// import BhagTB from "./components/BhagTB";

function App() {
  return (
    <div>
      <Routes>
        
        <Route exact path="/" element={<Homescreen />} />

        </Routes>
    </div>
  )
}

export default App
