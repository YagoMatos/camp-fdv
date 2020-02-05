import React from 'react';

import Text from '../../../Typography/Text/Text';
import Title from '../../../Typography/Title/Title';
import Topics from '../../../UI/Topics/Topics';
import LineDivision from '../../../UI/LineDivision/LineDivision';
import ImageCard from '../../../UI/Cards/ImageCard/ImageCard';

 const Remark = () => {
  return (
    <section className="relative py-20">
      <LineDivision color="text-white" top="0" bottom="auto"/>
   
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <ImageCard 
            url="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
              <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <i className="fas fa-rocket text-xl"></i>
              </div>
              <Title size="3xl">Observações</Title>

              <Topics>
                <Text color="gray-600">
                  Após inscrição a organização entrará em contato por email, whatsapp, telefone ou pessoalmente.
                </Text>
                <Text color="gray-600">
                  Em caso de desistência, será cobrado ou retido um valor (a ser negociado).
                </Text>
                <Text color="gray-600">
                  Próximo a data do evento será agendado um Pré-Acampa, com detalhes do evento.
                </Text>
              </Topics>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Remark;