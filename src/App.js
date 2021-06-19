import { Route } from "wouter";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
    </div>
  );
}

export default App;
