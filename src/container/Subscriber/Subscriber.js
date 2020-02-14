import React from 'react';

import Title from '../../components/Typography/Title/Title';
import Text from '../../components/Typography/Text/Text';
import SubsForm from './SubsForm/SubsForm';

const Subscriber = () => {
  return (
    <section className="pb-20 relative block bg-black-3">
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
          <div className="w-full lg:w-6/12 px-4">
            <Title size="4xl" color="white">Garanta já sua inscrição!</Title>
            <Text size="lg" color="white">
              Estamos com a novidade de pagamento online utilizando a plataforma do PagSeguro, 
              portanto fique tranquilo, pois não guardamos qualquer tipo de informação 
              referente aos seus dados de cartão de crédito ou débito.
            </Text>
          </div>  
        </div>
        <div className="flex flex-wrap text-center justify-center pt-20">
          <div className="w-full lg:w-6/12 px-4">
            <Title size="4xl" color="white">Formas de Pagamento</Title>
          </div>
        </div>
        <div className="flex flex-wrap mt-12 mb-12 justify-center">
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-black p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-medal text-xl"></i>
            </div>
            <Title size="xl" color="white">Boleto</Title>
            <Text color="white">
              Caso escolha parcelamento no boleto, 
              após a inscrição, entraremos em contato para informar os próximos passos.
            </Text>
          </div>
          <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="text-black p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className="fas fa-poll text-xl"></i>
            </div>
            <Title size="xl" color="white">Cartão (Débito ou Crédito)</Title>
            <Text color="white">
              Caso escolha pagar no cartão, após a inscrição, o botão para finalizar a compra estará liberado.
            </Text>
          </div>
        </div>
      </div>

      <SubsForm />
    </section>
  );
}

export default Subscriber;