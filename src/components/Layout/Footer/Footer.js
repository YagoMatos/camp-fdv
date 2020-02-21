import React from 'react';

import Title from '../../Typography/Title/Title';
import Text from '../../Typography/Text/Text';
import Button from '../../UI/Buttons/Button/Button';

import SocialButton from '../../UI/Buttons/SocialButton//SocialButton';

import './Footer.css';

const footer = () => {
  return (
    <footer className="relative bg-black-blue pt-8 pb-6">
      <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <Title color="white" size="3xl">Siga-nos nas Redes Sociais</Title>
              <div className="mt-6">
                <SocialButton 
                  color="blue-600"
                  link="https://pt-br.facebook.com/fdvmja" 
                  social="facebook" />
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-6/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Dúvidas? Contate-nos por email ou whatsapp!
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Text color="white" bold size="sm">acampamento@iprmaua.com.br</Text>
                    </li>
                    <li>
                      <Button link="https://web.whatsapp.com/send?phone=5511953834774&text=" color="white" bold size="sm">
                        (11) 95383-4774
                        <SocialButton 
                          color="green-600"
                          link="" 
                          social="whatsapp" />
                        </Button>
                    </li>
                    <li>
                      <Button link="https://web.whatsapp.com/send?phone=5511948185762&text=" color="white" bold size="sm">
                        (11) 94818-5762
                        <SocialButton 
                          color="green-600"
                          link="" 
                          social="whatsapp" />
                      </Button>
                    </li>
                  </ul>
                </div>
             
              </div>
            </div>
          </div>
          <hr className="my-6 border-white" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}Filhos da Verdade - IPRM
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}


export default footer;