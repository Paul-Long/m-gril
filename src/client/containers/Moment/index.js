import React, {h} from 'react';
import {Image, Pagination} from '../../components';

class Moment extends React.Component {
  renderImage = () => {
    return [1, 2, 3, 4, 5, 6, 7].map((i) => (<Image key={i} width={200} height={200} />))
  };
  render() {
    return (
      <div className='ym-moment'>
        <div className='ym-moment-content'>
          {this.renderImage()}
        </div>
        <Pagination />
      </div>
    )
  }
}

export default Moment;
