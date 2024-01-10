import { BrowserRouter, Route, Routes } from 'react-router-dom';

// components
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import { useAuthContext } from './hooks/useAuthContext.jsx';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady ? (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Login />} // Changed the element for '/'
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Home />} // Changed the element for '/signup'
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Home />} // Changed the element for '/login'
            />
          </Routes>
        </BrowserRouter>
      ) : (
        null
      )}
    </div>
  );
}

export default App;
