import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import SignInPage from "./pages/signinpage/signin";
import Profile from "./pages/profilepage/profile";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/profile" component={Profile} />
    </div>
  );
}

export default App;
