import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
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
        <Header menus={menus} />
        <div className='ym-app-content'>
          {children}
        </div>
      </div>
    )
  }
}

export default App;
