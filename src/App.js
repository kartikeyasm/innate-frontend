import {Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";        //Some Error
import SignUp from "./components/signup/SignUp";
import SignIn from "./components/signin/SignIn";
import HomePage from "./components/homePage/homePage";
import ForgetPassword from "./components/forgetPassword/forgetPassword";
import AuthLayout from "./components/AuthLayout/authLayout";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/auth" element={<AuthLayout/>}> 
          <Route path="signIn" element={<SignIn/>} />  
          <Route path="forgetPassword" element={<ForgetPassword/>} />
          <Route path="signUp" element={<SignUp/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
