import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import logo from '../../theme/images/logo.png';

class Header extends React.Component {
  static propTypes = {
    menus: PropTypes.array
  };
  static defaultProps = {
    menus: []
  };
  render() {
    const {menus = []} = this.props;
    return (
      <div className='ym-app-header'>
        <img className='ym-logo' src={logo} />
        <ul className='ym-app-ul'>
          {menus.map(m => (
            <li key={m.path}>
              <Link to={`/${m.path}`}>{m.name}</Link>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

export default Header;
