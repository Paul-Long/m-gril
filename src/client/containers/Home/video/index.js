import React, {h} from 'react';
import VideoList from './VideoList';

class ShowVideo extends React.Component {
  render() {
    return (
      <div className='ym-show-video'>
        <div className='show-video-play'>
          <h1>视频播放区</h1>
        </div>
        <VideoList />
      </div>
    )
  }
}

export default ShowVideo;
