import {Component} from 'preact';
import Header from './Header';
import '../../theme/style.less';

class App extends Component {
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
