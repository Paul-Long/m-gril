import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  static propTypes = {
    src: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };

  render() {
    const {width, height} = this.props;
    const props = {
      src: src
    };
    if (width) {
      props.width = width;
    }
    if (height) {
      props.height = height;
    }
    return (
      <div className='ym-image'>
        {src && <img {...props} />}
      </div>
    )
  }
}

export default Image;

const src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505903727468&di=a8e36da6c02ee9cb1e509d6f96cc784b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f2425593f1eb6ac7253264b48fd4.jpg%40900w_1l_2o_100sh.jpg';