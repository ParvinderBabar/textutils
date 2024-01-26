import React from "react";
import Navbar from "./component/Navbar";
import FormText from "./component/FormText";
import About from "./component/About";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <>
        <Navbar title="TextUtils" />

        <Routes>
          <Route
            path="/"
            element={<FormText heading="Write Text to analyze" />}
          />
          <Route
            path="/about"
            element={
              <div className="container my-3">
                <About />
              </div>
            }
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;
