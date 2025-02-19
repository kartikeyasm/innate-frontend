import {Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";        //Some Error
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import HomePage from "./components/homePage/homePage";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        
        <Route path="/signIn" element={<SignIn/>} />  
        <Route path="/forgetPassword" element={"ToDO"} />
        <Route path="/signUp" element={<SignUp/>} />
      
      </Routes>
    </>
  );
}

export default App;
