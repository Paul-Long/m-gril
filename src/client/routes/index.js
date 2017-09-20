import React from 'react';
import {browserHistory, BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
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

  render() {
    const menus = [
      {path: 'moment', name: '时光', component: 'Moment', exact: true}
    ];
    return (
      <Router history={browserHistory}>
        <App menus={menus}>
          <Redirect from='/' to='moment' />
          <Switch>
            {menus.map(m => {
              return (
                <Route key={m.path}
                       exact={!!m.exact}
                       path={`/${m.path}`}
                       component={(props) => this.renderComponent(props, m.component)}
                />)
            })}
          </Switch>
        </App>
      </Router>
    )
  }
}

export default Routes;
