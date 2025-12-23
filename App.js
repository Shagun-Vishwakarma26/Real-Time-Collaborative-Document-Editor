import React from "react"
import TextEditor from "./TextEditor"
import Home from "./Home" // Import the new Home component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        {/* Now the landing page shows up at the main URL */}
        <Route path="/" element={<Home />} />
        
        {/* The editor only opens when we have an ID */}
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  )
}

export default App