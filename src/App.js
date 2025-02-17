import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import {Route, Routes } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Routes>
    
      <Route path="/" element={<Navbar isLoggedIn={isLoggedIn}/>}/>
      
      <Route path="/signIn" element={<SignIn/>} />
      <Route path="/forgetPassword" element={"ToDO"} />
      <Route path="/signUp" element={<SignUp/>} />
    
    </Routes>
  );
}

export default App;
