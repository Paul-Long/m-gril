import React from 'react';
import {Link} from 'react-router-dom';
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

  render() {
    const {menus = []} = this.props;
    return (
      <div className='ym-app-header'>
        <img className='ym-logo' src={logo} />
        <ul className='ym-app-ul'>
          {menus.map(m => (
            <li key={m.path}>
              <Link className={this.state.active === m.path ? 'active' : ''}
                    to={m.path}
                    onClick={() => this.setState({active: m.path})}
              >{m.name}</Link>
            </li>)
          )}
        </ul>
      </div>
    )
  }
}

export default Header;
