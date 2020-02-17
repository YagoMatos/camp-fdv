import React from 'react';

import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

import img1 from '../../../assets/img1.jpeg';
import img2 from '../../../assets/img2.jpeg';
import img3 from '../../../assets/img3.jpeg';
import img4 from '../../../assets/img4.jpeg';
import img5 from '../../../assets/img5.jpeg';
import img6 from '../../../assets/img6.jpeg';
import img7 from '../../../assets/img7.jpeg';
import img8 from '../../../assets/img8.jpeg';
import img9 from '../../../assets/img9.jpeg';
import img10 from '../../../assets/img10.jpeg';
import img11 from '../../../assets/img11.jpeg';
import img12 from '../../../assets/img12.jpeg';
import img13 from '../../../assets/img13.jpeg';
import img14 from '../../../assets/img14.jpeg';
import img15 from '../../../assets/img15.jpeg';
import img16 from '../../../assets/img16.jpeg';
import img17 from '../../../assets/img17.jpeg';
import img18 from '../../../assets/img18.jpeg';
import img19 from '../../../assets/img19.jpeg';
import img20 from '../../../assets/img20.jpeg';


const carousel = ({ handleOpen, setHandleOpen, isMobile }) => {

  const listImg = () => {
    const listImg = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
      img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
    ]
    let slides = []

    slides = listImg.map(img => (
      <Slide
        key={img  }
        media={
          <img alt=""  src={img} />
        }
        style={{backgroundColor: '#00000026' }}
        mediaBackgroundStyle={{ 
          backgroundSize: 'cover',
          height: '90%',
          padding: '2em',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'transparent',
        }}
        title=""
        subtitle=""
      />
    ))

    return slides;
  }
  
  return (
    <div>
      {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
      <AutoRotatingCarousel
        label="Fechar"
        open={handleOpen.open}
        onClose={() => setHandleOpen({ open: false })}
        onStart={() => setHandleOpen({ open: false })}
        autoplay={false}
        mobile={isMobile}
        style={{ position: 'absolute' }}> 
        {listImg()}
      </AutoRotatingCarousel>
    </div>
  );
};

export default carousel;