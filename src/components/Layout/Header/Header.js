import React from 'react'

import Title from '../../Typography/Title/Title';
import Text from '../../Typography/Text/Text';

const header = () => {
  return (
    <div 
      className="relative pt-16 pb-32 flex content-center items-center justify-center"
      style={{minHeight: '75vh'}}>
          <div 
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1563902341721-029085ad9347?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=1350&q=80")'
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div>
                    <Title color="white" size="5xl">
                      Acampamento FDV 2020
                    </Title>
                    <Text color="gray-300" size="lg">
                      Uma experiência que mudará o resto da sua vida!
                    </Text>
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default header;