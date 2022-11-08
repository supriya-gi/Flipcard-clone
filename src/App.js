import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./Component/Header";
import Main from "./Component/Main";
import Footer from "./Component/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
