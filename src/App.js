import React from 'react';
import Home from './pages/Home';
import MainHeader from './components/MainHeader/Navigation';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import StatesWise from './pages/StateWise';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <header className="header">
          <MainHeader />
        </header>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/global"></Redirect>
          </Route>

          <Route path="/global">
            <Home />
          </Route>

          <Route path="/states">
            <StatesWise />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
