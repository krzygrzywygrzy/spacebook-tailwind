import { Route } from "wouter";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

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
