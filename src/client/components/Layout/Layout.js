import React, {h} from 'react';
import ClassNames from 'classnames';

class Layout extends React.Component {
  render() {
    const {className = '', children} = this.props;
    const cn = ClassNames(['cc-layout', className]);
    return (
      <div className={cn}>
        {children}
      </div>
    )
  }
}

export default Layout;
