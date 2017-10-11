import React, {h} from 'react';
import ClassNames from 'classnames';

class Layout extends React.Component {
  render(props) {
    const {className = '', children} = props;
    const cn = ClassNames(['cc-layout', className]);
    return (
      <div className={cn}>
        {children}
      </div>
    )
  }
}

export default Layout;
