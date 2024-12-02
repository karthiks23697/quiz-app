import React, {useState} from 'react';
import './App.css';
import Login from './components/LoginPage/LoginPage';
import Registration from './components/RegistrationPage/RegistrationPage';
import Quiz from './components/Quiz/Quiz';
import Home from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
    <div className="App">
        <div className="container login-container align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              {/* <Registration showError={updateErrorMessage} updateTitle={updateTitle}/> */}
              {/* <Login showError={updateErrorMessage} updateTitle={updateTitle}/> */}
              <Quiz showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
              <Registration showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <Login showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;