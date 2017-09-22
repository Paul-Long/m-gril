import React, {h} from 'react';
import classNames from 'classnames';

class Mask extends React.Component {
  onClick = (e) => {
    const {onClick} = this.props;
    (typeof onClick === 'function') && onClick(e);
  };

  render() {
    const {children, className} = this.props;
    const props = {
      className: classNames('ym-mask', className),
      onClick: this.onClick
    };
    return (
      <div {...props}>
        <div className='ym-mask-content'>
          {children}
        </div>
      </div>
    )
  }
}

export default Mask;
