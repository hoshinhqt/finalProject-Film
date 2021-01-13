import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import HomeTemplate from './containers/HomeTemplate';
import { routesHome } from './routes/index';
import HomePage from './containers/HomeTemplate/HomePage';

const showLayoutHome = (route) => {
  if (route && route.length > 0) {
    console.log('true');
    return route.map((item, index) => {
      
      return <HomeTemplate key={index} exact={item.exact} path={item.path} component={item.component} />
    })
  }
}
function App() {
  return (
    <Switch>
      {showLayoutHome(routesHome)}
    </Switch>
  );
}
const AppWithRouter = withRouter(App)
export default AppWithRouter;
