import React, {h} from 'react';
import classNames from 'classnames';
import Button from '../Button';
import {shouldUpdate} from 'util/reactUtil';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      total: 8
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldUpdate.apply(this, arguments);
  }
  getClassName = () => {
    const {className} = this.props;
    return classNames('ym-pagination', className);
  };
  renderPageNumber = () => {
    const {total, current} = this.state;
    let number = [];
    for (let i = 1; i <= total; i++) {
      let num = (
        <a key={`num-${i}`}
           className={current === i ? 'active' : ''}
           onClick={() => this.setState({current: i})}
        >{i}</a>
      );
      number.push(num);
    }
    return number;
  };

  render() {
    const props = {
      className: this.getClassName()
    };
    return (
      <div {...props}>
        <Button>上一页</Button>
        <div className='ym-pagination-num'>
          {this.renderPageNumber()}
        </div>
        <Button>下一页</Button>
      </div>
    )
  }
}

export default Pagination;
