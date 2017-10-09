import React, {h} from 'react';
import ClassNames from 'classnames';

class Header extends React.Component {
  render(props) {
    const {className = '', children} = props;
    const cn = ClassNames(['ym-layout-header', className]);
    return (
      <div className={cn}>
        {children}
      </div>
    )
  }
}

export default Header;
