import { useState } from "react";
import PrimarySearchAppBar from "./components/navbar/navbar";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <PrimarySearchAppBar isLoggedIn={isLoggedIn}></PrimarySearchAppBar>
      
    </div>
  );
}

export default App;
