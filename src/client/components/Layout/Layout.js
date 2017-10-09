import React, {h} from 'react';
import ClassNames from 'classnames';

class Layout extends React.Component {
  render(props) {
    const {className = '', children} = props;
    const cn = ClassNames(['ym-layout', className]);
    return (
      <div className={cn}>
        {children}
      </div>
    )
  }
}

export default Layout;
