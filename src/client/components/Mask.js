import React, {h} from 'react';
import classNames from 'classnames';

const CC_MASK = 'cc-mask';
class Mask extends React.Component {
  handleClick = (e) => {
    const {onClick} = this.props;
    (typeof onClick === 'function') && onClick(e);
  };

  render() {
    const {children, className} = this.props;
    const props = {
      className: classNames(CC_MASK, className)
    };
    return (
      <div {...props}>
        <div className={`${CC_MASK}-content`} onClick={this.handleClick}>
          <div onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default Mask;
