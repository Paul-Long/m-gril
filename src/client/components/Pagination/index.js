import React, {h} from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Input from '../Input';

class Pagination extends React.Component {
  getClassName = () => {
    const {className} = this.props;
    return classNames('ym-pagination', className);
  };
  render() {
    const props = {
      className: this.getClassName()
    };
    return (
      <div {...props}>
        <Button>上一页</Button>
        <Input />
        <Button>下一页</Button>
      </div>
    )
  }
}

export default Pagination;
