import React from 'react';
import {browserHistory, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Bundle from './bundle';
import App from '../containers/App';

class Routes extends React.Component {
  renderComponent = (props, component) => {
    return (
      <Bundle load={() => import(`../containers/${component}/index.js`)}>
        {(COM) => <COM {...props} />}
      </Bundle>
    )
  };
  route = (menu) => {
    return (
      <Route key={menu.path}
             path={menu.path}
             exact
             component={(props) => this.renderComponent(props, menu.component)}
      />)
  };

  render() {
    const menus = [
      {path: '/', name: '时刻', component: 'Moment'},
      {path: '/video', name: '时光', component: 'Video'}
    ];
    return (
      <Router history={browserHistory}>
        <App menus={menus}>
          <Switch>
            {menus.map(this.route)}
          </Switch>
        </App>
      </Router>
    )
  }
}

export default Routes;
