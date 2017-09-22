import React, {h} from 'react';
import {Router} from 'preact-router';
import AsyncRoute from 'preact-async-route';
import App from '../containers/App';

class Routes extends React.Component {
  route = (menu) => {
    return (
      <AsyncRoute
        key={menu.path}
        path={menu.path}
        getComponent={() => import(`../containers/${menu.component}/index.js`).then(module => module.default)}
      />
    );
  };

  render() {
    const menus = [
      {path: '/', name: '时刻', component: 'Moment'},
      {path: '/video', name: '时光', component: 'Video'}
    ];
    return (
      <App menus={menus}>
        <Router>
          {menus.map(this.route)}
        </Router>
      </App>
    )
  }
}

export default Routes;
