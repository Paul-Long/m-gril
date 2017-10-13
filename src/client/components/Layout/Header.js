import React, {h} from 'react';
import ClassNames from 'classnames';

class Header extends React.Component {
  render() {
    const {className = '', children} = this.props;
    const cn = ClassNames(['cc-layout-header', className]);
    return (
      <div className={cn}>
        {children}
      </div>
    )
  }
}

export default Header;
