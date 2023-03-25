import React from "react";

import { Footer, Blog, Features, WhatGPT3, Header } from "./containers";
import { Brand, Navbar } from "./components";
import Type from "../src/containers/header/Type";
import "./App.css";

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
      <div className="header-title">
        <h2>حرر جهازك من الآيكلاود</h2>
        <Type />
      </div>
    </div>
    <Brand />
    <WhatGPT3 />
    <Features />
    <Footer />
  </div>
);

export default App;
