import {Component} from 'preact';

class Image extends Component {
  render(props) {
    const {width, height} = props;
    const imgProps = {
      src: src
    };
    if (width) {
      imgProps.width = width;
    }
    if (height) {
      imgProps.height = height;
    }
    return (
      <div className='ym-image'>
        {src && <img {...imgProps} />}
      </div>
    )
  }
}

export default Image;

const src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505903727468&di=a8e36da6c02ee9cb1e509d6f96cc784b&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01f2425593f1eb6ac7253264b48fd4.jpg%40900w_1l_2o_100sh.jpg';