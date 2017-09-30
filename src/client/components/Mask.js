import React, {h} from 'react';
import classNames from 'classnames';

class Mask extends React.Component {
  handleClick = (e) => {
    const {onClick} = this.props;
    (typeof onClick === 'function') && onClick(e);
  };

  render() {
    const {children, className} = this.props;
    const props = {
      className: classNames('ym-mask', className)
    };
    return (
      <div {...props}>
        <div className='ym-mask-content' onClick={this.handleClick}>
          <div onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Mask;
