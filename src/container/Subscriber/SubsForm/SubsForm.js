import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import Title from '../../../components/Typography/Title/Title';
import Text from '../../../components/Typography/Text/Text';
import Label from '../../../components/Typography/Label/Label';
import Button from '../../../components/UI/Buttons/Button/Button';
import Modal from '../../../components/UI/Modal/Modal';
import './SubsForm.css';

const SubsForm = props => {
  const { register, handleSubmit, errors, reset } = useForm()
  const [open, setOpen] = useState(false)
  const [err, setErr] = useState(false)
  const onSubmit = useCallback((data, e) => {
    e.target.reset(); 
    console.log(data)
    fetch('https://camp-fdv.firebaseio.com/participantes.json', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }).then(responseData => {
      setOpen(true);
    }).catch(err => {
      setErr(true)
      setOpen(true)
    });
  }, []);

  const clear = () => {
    setOpen(false)
    setErr(false)
  }

  return (
    <div className="relative block py-24 lg:pt-0 bg-gray-900">
      { open && !err ? <Modal success feedback="success" onClose={clear}>Inscrição realizada com sucesso!</Modal> 
        :
       open && err && <Modal feedback="error" onClose={clear}>Infelizmente estamos passando por uma instabilidade, tente mais tarde!</Modal> 
      }
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <Title size="2xl">Se você JÁ ESTÁ inscrito e deseja apenas pagar online no Cartão:</Title>
                <Button>Pague Aqui!</Button>
                  <div className="py-10">
                    <Text> OU </Text>
                  </div>  
                  <div className="pt-15">
                    <Title size="2xl">Se você AINDA NÃO está inscrito: </Title>
                  </div>
                  <div className="relative w-full mb-3 mt-8">
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="relative w-full mb-3">
                      <Label>Nome Completo</Label>
                      <input type="text" placeholder="Nome Completo" name="Nome" ref={register({required: true, min: 4, maxLength: 255})} />
                    </div>
                    
                    <div className="relative w-full mb-3">
                      <Label>Nome do Responsável (menor de 18 anos)</Label>  
                      <input type="text" placeholder="Nome do Responsável" name="Responsavel" ref={register({required: true, min: 4, maxLength: 255})} />
                      <p>{errors.Responsavel && 'This is required'}</p>
                    </div>
                    
                    <div className="column">
                      <div className="relative mb-3">
                        <Label>Data de Nasc.</Label>
                        <input type="date" placeholder="Data de Nasc." name="Data de Nasc." ref={register({required: true})} />
                      </div>
                      <div className="relative x-70 mb-3">                     
                        <Label>Email</Label>
                        <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
                      </div>
                    </div>
                    
                    <div className="column">
                      <div className="relative x-45 mb-3">
                        <Label>CPF (Somente Número)</Label>
                        <input type="text" placeholder="CPF" name="CPF" ref={register({required: true, min: 11, maxLength: 12})} />
                      </div>
                      <div className="relative x-45 mb-3">                     
                        <Label>RG (Somente Número)</Label>
                        <input type="text" placeholder="RG" name="RG" ref={register({required: true, min: 8, maxLength: 10})} />
                      </div>
                    </div>

                    <div className="column">
                      <div className="relative x-45 mb-3">
                        <Label>Telefone (Somente Número)</Label>
                        <input type="text" placeholder="Telefone" name="Telefone" ref={register({required: true, min: 8, maxLength: 12})} />
                      </div>
                      <div className="relative x-45 mb-3">                     
                        <Label>Celular (Somente Número)</Label>
                        <input type="text" placeholder="Celular" name="Celular" ref={register({required: true, min: 8, maxLength: 12})} />
                      </div>
                    </div>

                    <div className="column">
                      <div className="relative x-23 mb-3">
                        <Label>Sexo</Label>
                        <select name="Sexo" ref={register({ required: true })}>
                          <option value="Masculino">Masculino</option>
                          <option value="Feminino">Feminino</option>
                        </select>                    </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>Estado Civil</Label>
                        <select name="Estado Civil" ref={register({ required: true })}>
                        <option value="Solteiro">Solteiro</option>
                        <option value="Casado">Casado</option>
                      </select>                    </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>Preferência de Trans.</Label>
                        <select name="Preferência de Transporte" ref={register({ required: true })}>
                          <option value="Ônibus do Evento">Ônibus do Evento</option>
                          <option value="Particular (sem alteração no valor)">Particular (sem alteração no valor)</option>
                        </select>                    </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>Camiseta (Tamanho)</Label>
                        <select name="Camiseta" ref={register({ required: true })}>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="P">P</option>
                          <option value="M">M</option>
                          <option value="G">G</option>
                          <option value="GG">GG</option>
                        </select>                    
                      </div>
                    </div>
                    
                    <div className="relative w-full mb-3">
                      <Label>Endereço</Label>
                      <input type="text" placeholder="Endereço" name="Endereço" ref={register({required: true, min: 5, maxLength: 255})} />
                    </div>

                    <div className="column">
                      <div className="relative x-10 mb-3">
                        <Label>Nº</Label>
                        <input type="text" placeholder="Número" name="Número" ref={register({required: true, min: 1})} />
                      </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>Bairro</Label>
                        <input type="text" placeholder="Bairro" name="Bairro" ref={register({required: true, min: 3, maxLength: 255})} />
                      </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>Cidade</Label>
                        <input type="text" placeholder="Cidade" name="Cidade" ref={register({required: true, min: 3, maxLength: 255})} />
                      </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>CEP</Label>
                        <input type="text" placeholder="CEP" name="CEP" ref={register({required: true, min: 8, maxLength: 9})} />
                      </div>
                      <div className="relative x-10 mb-3">                     
                        <Label>UF</Label>
                        <input type="text" placeholder="UF" name="UF" ref={register({required: true, min: 1, maxLength: 2})} />
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Button>ENVIAR</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubsForm;

