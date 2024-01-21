// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";

import FormText from "./component/FormText";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <FormText heading="Write Text to analyze" />
      </div>
    </>
  );
}

export default App;
