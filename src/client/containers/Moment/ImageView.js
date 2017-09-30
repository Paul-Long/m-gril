import React, {h} from 'react';
import Mask from 'components/Mask';
import Image from 'components/Image';

class ImageView extends React.Component {
  render(props) {
    const {onClick} = props;
    return (
      <Mask onClick={onClick}>
        <Image />
      </Mask>
    )
  }
}

export default ImageView;
