import React, {h} from 'react';

class ShowVideo extends React.Component {
  render() {
    return (
      <div className='ym-show-video'>
        <div className='show-video-play'>
          <h1>视频播放区</h1>
        </div>
        <div className='show-video-list'>
          <h1>视频列表区</h1>
        </div>
      </div>
    )
  }
}

export default ShowVideo;
