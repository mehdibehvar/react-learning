import React from "react";
// import '../../styles/mainlayout.css'
import Navbar from "../common/Navbar";
const MainLayout = ({children}) => {

  return <>
    <div className="main-layout">
   <Navbar></Navbar>
    {children}  
  </div>
  </>

};

export default MainLayout;
