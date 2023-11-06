import React from "react";
import Header from "./compoments/Header";
import Footer from "./compoments/Footer";

const App = () => {
  return (
      <div className="wrapper">
        <Header/>
        <div className="main">content here</div>
        <Footer/>
      </div>
  );
};

export default App;