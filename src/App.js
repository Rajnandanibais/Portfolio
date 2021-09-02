import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import React, { Fragment } from "react";
import Contact from "./component/Contact";
import Project from "./component/Project";
import Skillls from "./component/Skillls";
import Edu from "./component/Edu";


function App() {
  return (
      < >
     <div className="section" >
      <Navbar/>
      <Header/>
      <Project/>
      <Skillls/>
      <Edu/>
      <Contact/>
      </div>
      </>
  );
}

export default App;
