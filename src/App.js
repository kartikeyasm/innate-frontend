import PrimarySearchAppBar from "./components/navbar/navbar";
import OAuthSignInPage from "./components/sign-in/signin";

function App() {
  return (
    <div className="App">
      <OAuthSignInPage></OAuthSignInPage>
      <PrimarySearchAppBar></PrimarySearchAppBar>
    </div>
  );
}

export default App;
