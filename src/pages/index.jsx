import React from "react";
import Home from "../containers/Home";
import "../styles/home.scss";

const Index = () => {
  if (typeof document !== 'undefined') { 
    return (
      <div>
        <Home/>
      </div>
    );
  }
};
export default Index;
