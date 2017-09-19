import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from '../../theme/images/logo.png';
import '../../theme/style.less';

class App extends React.Component {
  static propTypes = {
    menus: PropTypes.array
  };
  static defaultProps = {
    menus: []
  };

  render() {
    const {menus = [], children} = this.props;
    return (
      <div className='ym-app'>
        <img src={logo} width={250} height={60} />
        <ul className='ym-app-header'>
          {menus.map(m => (
            <li key={m.path}>
              <Link to={`/${m.path}`}>{m.path}</Link>
            </li>)
          )}
        </ul>
        {children}
      </div>
    )
  }
}

export default App;
