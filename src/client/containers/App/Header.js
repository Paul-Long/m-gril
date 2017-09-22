import React, {h} from 'react';
import {Link} from 'preact-router/match';
import logo from 'theme/images/logo.png';
import {shouldUpdate} from 'util/reactUtil';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '/'
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldUpdate.apply(this, arguments);
  }

  render(props) {
    const {menus = []} = props;
    return (
      <div className='ym-app-header'>
        <img className='ym-logo' src={logo} />
        <ul className='ym-app-ul'>
          {menus.map(m => (
            <li key={m.path}>
              <Link activeClassName='active'
                    href={m.path}
              >{m.name}</Link>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

export default Header;
