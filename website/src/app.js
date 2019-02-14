import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App'; // eslint-disable-line sort-imports
import Checkbox from './app/checkbox/Checkbox';
import Error404 from './app/error/404/Error404';
import Home from './app/home/Home';
import Installation from './app/installation/Installation';
import Radio from './app/radio/Radio';
import SkinFlat from './app/skin/SkinFlat';
import SkinFuturico from './app/skin/SkinFuturico';
import SkinLine from './app/skin/SkinLine';
import SkinMinimal from './app/skin/SkinMinimal';
import SkinPolaris from './app/skin/SkinPolaris';
import SkinSquare from './app/skin/SkinSquare';

const routes = (
  <Router>
    <App>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Checkbox} path="/checkbox" exact />
        <Route component={Radio} path="/radio" exact />
        <Route component={Installation} path="/installation" exact />
        <Route component={SkinFlat} path="/skin/flat" exact />
        <Route component={SkinFuturico} path="/skin/futurico" exact />
        <Route component={SkinLine} path="/skin/line" exact />
        <Route component={SkinMinimal} path="/skin/minimal" exact />
        <Route component={SkinPolaris} path="/skin/polaris" exact />
        <Route component={SkinSquare} path="/skin/square" exact />
        <Route component={Error404} path="*" />
      </Switch>
    </App>
  </Router>
);

ReactDOM.render(routes, document.querySelector('#app'));
