import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Title from '../../../Typography/Title/Title';
import Carousel from '../../../UI/Carousel/Carousel';

import './PhotosAndVideos.css';

const PhotosAndVideos = () => {
  const [handleOpen, setHandleOpen] = useState({ open: false });
  const handleClick = () => {
    setHandleOpen({ open: true });
  };
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <section className="pb-20 bg-bege relative block">
      
      <div className="relative py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <Title size="3xl">Videos & Fotos</Title>
              <div className="py-10">
                <Button onClick={handleClick}>Confira Aqui!</Button>
                <Carousel
                  isMobile={matches}
                  handleOpen={handleOpen}
                  setHandleOpen={setHandleOpen}
                />
              </div>         
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default PhotosAndVideos;