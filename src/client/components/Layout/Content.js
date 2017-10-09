import React, {h} from 'react';
import ClassNames from 'classnames';

class Content extends React.Component {
  render(props) {
    const {className = '', children} = props;
    const cn = ClassNames(['ym-layout-content', className]);
    return (
      <div className={cn}>
        {children}
      </div>
    )
  }
}

export default Content;
