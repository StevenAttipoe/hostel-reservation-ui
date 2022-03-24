import './App.css';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ResidentList from './components/ResidentList';
import Home from './pages/home';
import Dasboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/signup" element={<SignUp />}> </Route>
              <Route path="/signin" element={<SignIn />}> </Route>
              <Route path="/dashboard" element={<Dasboard />}> </Route>
              <Route path="/residents" element={<ResidentList />}> </Route>

          </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
