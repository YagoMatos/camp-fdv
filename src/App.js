import React from 'react';

import Subscriber from './container/Subscriber/Subscriber';
import Header from './components/Layout/Header/Header';
import Information from './components/Layout/Sections/Information/Information';
import Remark from './components/Layout/Sections/Remark/Remark';
import PhotosAndVideos from './components/Layout/Sections/PhotosAndVideos/PhotosAndVideos';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Information />
      <Remark />
      <PhotosAndVideos/>
      <Subscriber />
      <Footer />
    </div>
  );
}

export default App;