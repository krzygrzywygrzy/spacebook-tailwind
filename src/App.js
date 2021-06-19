import { Route } from "wouter";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import SignupPage from "./pages/Signup";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/profile/:id">
        {(params) => {
          return <ProfilePage id={params.id} />;
        }}
      </Route>
    </div>
  );
}

export default App;
