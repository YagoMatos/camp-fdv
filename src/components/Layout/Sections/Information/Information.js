import React from 'react';

import Card from '../../../UI/Cards/SimpleCard/SimpleCard';
import FullCard from '../../../UI/Cards/FullCard/FullCard';
import Text from '../../../Typography/Text/Text';
import Title from '../../../Typography/Title/Title';
import Topics from '../../../UI/Topics/Topics';

import image from '../../../../assets/sitio.jpg';
import './Information.css'

const information = () => {
  return (
    <section className="pb-20 bg-black-3 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <Card 
                colorIcon="bg-blue-400"
                title="Conecte-se"
                description="Faça Novas Amizades" 
                icon="fas fa-user-friends"
              />
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <Card 
                  colorIcon="bg-red-400"
                  title="Evolua"
                  description="Creça em Intimidade com Deus" 
                  icon="fas fa-fire"
                />
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <Card 
                  colorIcon="bg-green-400"
                  title="Transforme"
                  description="Impacte o Mundo ao Seu Redor" 
                  icon="fas fa-redo"
                />
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mb-bw-card">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-100">
                  <i className="fas fa-info text-xl"></i>
                </div>
                <Title color="white" size="3xl">
                  Informações
                </Title>
                
                <Topics>
                  <Text color="white">
                    Serão nos dias 20, 21 e 22 de Novembro (saida no dia 19)
                  </Text>
                  <Text color="white">
                    Local de Saida: R. Ricardo Gonçalves, 295, Vila Bocaina - Mauá - SP
                  </Text>
                  <Text color="white">
                    Idade Mínima de 12 anos
                  </Text>
                  <Text color="white">
                    Valor: R$ 280,00 (Em até 8x de R$ 37,00 começando em Março até Outubro). 
                    Caso comece a pagar de Abril em diante, o número de parcelas possíveis diminuirá com o passar dos meses.
                  </Text>
                </Topics>
              </div>

              <FullCard 
                title="Chácara Recanto Feliz"
                description="Para mais informações sobre a chácara"
                link="http://www.acampamentorecantofeliz.com.br/"
                btnLink="Visite o site"
                image={image}
              />
            </div>
        </div>
    </section>
  )
}

export default information;