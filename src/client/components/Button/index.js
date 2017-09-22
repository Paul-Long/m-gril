import React, {h} from 'react';
import classNames from 'classnames';

class Button extends React.Component {
  getClassName = () => {
    const {className, type = 'default'} = this.props;
    let typeClass = `ym-btn-${type}`;
    return classNames('ym-btn', className, typeClass);
  };
  onClick = (e) => {
    const {onClick} = this.props;
    (typeof onClick === 'function') && onClick(e);
  };
  render() {
    const {children} = this.props;
    const props = {
      className: this.getClassName(),
      onClick: this.onClick
    };
    return (
      <button {...props}>
        {children}
      </button>
    )
  }
}

export default Button;
