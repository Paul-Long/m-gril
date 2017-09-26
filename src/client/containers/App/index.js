import React, {h} from 'react';
import Header from './Header';
import 'theme/styles/style.less';

class App extends React.Component {
  render(props) {
    const {menus = [], children} = props;
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
