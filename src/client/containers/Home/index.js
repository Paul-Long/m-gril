import React, {Component} from 'react';
import Layout from 'components/Layout';
import ShowPhoto from './ShowPhoto';
import ShowVideo from './video';

class Home extends React.Component {
  render() {
    return (
      <Layout className='ym-home'>
        <Layout.Content>
          <ShowVideo />
          <ShowPhoto />
        </Layout.Content>
      </Layout>
    )
  }
}

export default Home;
