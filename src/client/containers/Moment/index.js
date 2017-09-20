import React from 'react';
import {Image} from '../../components';

class Moment extends React.Component {
  renderImage = () => {
    return [1, 2, 3, 4, 5, 6, 7].map((i) => (<Image key={i} width={200} height={200} />))
  };
  render() {
    return (
      <div className='ym-moment'>
        {this.renderImage()}
      </div>
    )
  }
}

export default Moment;
