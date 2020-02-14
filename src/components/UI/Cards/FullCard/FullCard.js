import React from 'react'

import Title from '../../../Typography/Title/Title';
import Text from '../../../Typography/Text/Text';
import Button from '../../Buttons/Button/Button';

import './FullCard.css';

const fullCard = props => {
  return (
    <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
        <img
          alt="..."
          src={props.image}
          className="w-full align-middle rounded-t-lg"
        />
        <blockquote className="relative p-8 mb-4">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 w-full block"
            style={{
              height: '95px',
              top: '-94px'
            }}>
            <polygon
              points="-30,95 583,95 583,65"
              className="text-pink-600 fill-current">
            </polygon>
          </svg>
          <Title size="xl" color="white">
            <strong>{props.title}</strong>
          </Title>
          
          <Text size="md" color="white">
            {props.description}
          </Text>
          <div className="py-5">
            <Button link={props.link}>
              {props.btnLink}
            </Button>
          </div>
        </blockquote>
      </div>
    </div>
  )
}

export default fullCard;