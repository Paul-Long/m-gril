import React, {h} from 'react';
import Image from 'components/Image';
import Pagination from 'components/Pagination';
import Button from 'components/Button';
import ImageView from './ImageView';
import {shouldUpdate} from 'util/reactUtil';

class Moment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showView: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldUpdate.apply(this, arguments);
  }

  handleClick = () => {
    this.setState({showView: true});
  };
  renderImage = () => {
    return [1, 2, 3, 4, 5, 6, 7].map((i) => (
      <Image key={i}
             onClick={this.handleClick}
      />
    ))
  };

  render(props, state) {
    const {showView} = state;
    return (
      <div className='ym-moment'>
        <div className='ym-moment-header'>
          <Button type='primary'>上传</Button>
        </div>
        <div className='ym-moment-content'>
          {this.renderImage()}
        </div>
        <Pagination />
        {showView ? <ImageView onClick={() => this.setState({showView: false})} /> : null}
      </div>
    )
  }
}

export default Moment;
