import React, {h} from 'react';
import ClassNames from 'classnames';

class Content extends React.Component {
  render() {
    const {className = '', children} = this.props;
    const cn = ClassNames(['cc-layout-content', className]);
    return (
      <div className={cn}>
        {children}
      </div>
    )
  }
}

export default Content;
