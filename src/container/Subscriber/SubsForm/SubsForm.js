import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import Title from '../../../components/Typography/Title/Title';
import Text from '../../../components/Typography/Text/Text';
import Label from '../../../components/Typography/Label/Label';
import Button from '../../../components/UI/Buttons/Button/Button';
import Submit from '../../../components/UI/Buttons/Submit/Submit';
import Modal from '../../../components/UI/Modal/Modal';
import './SubsForm.css';

const SubsForm = props => {
  // eslint-disable-next-line no-unused-vars
  const { register, handleSubmit, errors, reset } = useForm()
  const [open, setOpen] = useState(false)
  const [err, setErr] = useState(false)
  const [payMethod, setMethod] = useState('')
  const onSubmit = (data, event) => {
    event.target.reset();
    //data = 'Yago Janu, Catia Matos';
    setMethod(data.Pagamento)

    const dataPlanilha = (Object.values(data)).join(', ')
    firebase(data, dataPlanilha)
  };

  const firebase = useCallback((data, dataPlanilha) => {
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
      planilha(dataPlanilha)
    }).catch(err => {
      setErr(true)
      setOpen(true)
    });
  }, []);

  const planilha = (data) => {
    fetch('https://us-central1-camp-fdv.cloudfunctions.net/httpPlanilha', {
      method: 'POST',
      mode: 'no-cors', // 'cors' by default
      body: data,
      headers: {        
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return response.json()
    }).then(res => {
      console.log('ok')
    }).catch(err => {
      console.log('bad') 
    });
  }

  const clear = () => {
    setOpen(false)
    setErr(false)
  }

  return (
    <div className="relative block py-24 lg:pt-0 bg-black-3">
      { open && !err ? (
        <Modal 
          success 
          feedback="success" 
          method={payMethod} 
          onClose={clear}>
            Inscrição realizada com sucesso!
        </Modal> 
        ) :
        open && err && (
        <Modal 
          feedback="error" 
          method={payMethod} 
          onClose={clear}>
            Desculpe, não foi possível te cadastrar. Tente mais tarde!
        </Modal>
        ) 
      }
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div className="w-full lg:w-8/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200">
              <div className="flex-auto justify-center p-5 lg:p-10">
                <div className="text-position">
                  <Title color="black" size="2xl">Se você <strong>JÁ ESTÁ</strong> inscrito e deseja apenas pagar online no Cartão:</Title>
                  <div className="py-5">
                    <Button link={'https://pag.ae/7VJU96fS5'}>Pague Aqui!</Button>
                  </div>
                  <div className="py-10">
                      <Text color="black"> OU </Text>
                  </div>  
                  <div className="pt-15">
                      <Title color="black" size="2xl">Se você <strong>AINDA NÃO</strong> está inscrito: </Title>
                  </div>
                </div>
                
                  <div className="relative w-full mb-3 mt-8">
                  
                  <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="relative w-full mb-3">
                      <Label>Nome Completo</Label>
                      <input type="text" placeholder="Nome Completo" name="Nome" ref={register({
                        required: true, min: 4, maxLength: 255, validate: value => value !== '',
                      })} />
                      {errors.Nome && <p className="error">Campo Nome não deve estar vazio!</p>}
                    </div>
                    
                    <div className="column">
                      <div className="relative mb-3">
                        <Label>Data de Nasc.</Label>
                        <input type="date" placeholder="Data de Nasc." name="Data" ref={register({
                          required: true,  validate: value => value !== ''
                          })} />
                          {errors.Data && <p className="error">Campo Data de Nasc. não deve estar vazio!</p>}
                      </div>
                      <div className="relative x-70 mb-3">                     
                        <Label>Email</Label>
                        <input type="text" placeholder="Email" name="Email" ref={register({
                          required: true, pattern: /^\S+@\S+$/i, validate: value => value !== '', 
                        })} />
                      </div>
                      {errors.Email && <p className="error">Campo Email não deve estar vazio!</p>}
                    </div>

                    <div className="column">
                      <div className="relative x-60 mb-3">
                        <Label>Nome do Responsável (menor de 18 anos)</Label>  
                        <input type="text" placeholder="Nome do Responsável" name="Responsavel" ref={register({
                          required: true, min: 4, maxLength: 255, validate: value => value !== '',
                          })} />
                        {errors.Responsavel && <p className="error">Campo Responsavel não deve estar vazio! Se você tiver mais que 18 anos, pode colocar o seu próprio nome!</p>}
                      </div>
                      <div className="relative x-30 mb-3">                     
                        <Label>Forma de Pagamento</Label>
                        <select name="Pagamento" ref={register({ required: true, validate: value => value !== '' })}>
                          <option value=""></option>
                          <option value="Cartao">Cartão (Credito/Débito)</option>
                          <option value="Boleto">Boleto</option>
                        </select>                    
                        {errors.Pagamento && <p className="error">Campo Form. de Pagamento não deve estar vazio! Escolha uma opção!</p>}
                      </div>   
                    </div>           
                    
                    <div className="column">
                      <div className="relative x-45 mb-3">
                        <Label>CPF (Somente Número)</Label>
                        <input type="number" placeholder="CPF" name="CPF" ref={register({
                          required: true, min: 11, maxLength: 12, validate: value => value !== '', 
                        })} />
                      </div>
                      {errors.CPF && <p className="error">Campo CPF não deve estar vazio! Min: 12 números</p>}
                      <div className="relative x-45 mb-3">                     
                        <Label>RG (Somente Número)</Label>
                        <input type="number" placeholder="RG" name="RG" ref={register({
                          required: true, min: 8, maxLength: 10, validate: value => value !== '', 
                        })} />
                      </div>
                      {errors.RG && <p className="error">Campo RG não deve estar vazio! Min: 8 números</p>}
                    </div>

                    <div className="column">
                      <div className="relative x-45 mb-3">
                        <Label>Telefone (Somente Número)</Label>
                        <input type="number" placeholder="Telefone" name="Telefone" ref={register({
                          required: true, min: 8, maxLength: 12, validate: value => value !== '', 
                        })} />
                      </div>
                      {errors.Telefone && <p className="error">Campo Tel não deve estar vazio! Min: 8 números</p>}
                      <div className="relative x-45 mb-3">                     
                        <Label>Celular (Somente Número)</Label>
                        <input type="text" placeholder="Celular" name="Celular" ref={register({
                          required: true, min: 8, maxLength: 12, validate: value => value !== '', 
                        })} />
                      </div>
                      {errors.Celular && <p className="error">Campo Cel. não deve estar vazio! Min: 9 números</p>}
                    </div>

                    <div className="column">
                      <div className="relative x-23 mb-3">
                        <Label>Sexo</Label>
                        <select name="Sexo" ref={register({ required: true, validate: value => value !== ''  })}>
                          <option value=""></option>
                          <option value="Masculino">Masculino</option>
                          <option value="Feminino">Feminino</option>
                        </select>
                        {errors.Sexo && <p className="error">Campo Sexo não deve estar vazio! Escolha uma opção!</p>}
                    </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>Estado Civil</Label>
                        <select name="Civil" ref={register({ required: true, validate: value => value !== '' })}>
                          <option value=""></option>
                          <option value="Solteiro">Solteiro</option>
                          <option value="Casado">Casado</option>
                        </select>                    
                        {errors.Civil && <p className="error">Campo Est. Civil não deve estar vazio! Escolha uma opção!</p>}
                      </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>Preferência de Trans.</Label>
                        <select name="Transporte" ref={register({ required: true, validate: value => value !== '' })}>
                            <option value=""></option>
                            <option value="Ônibus do Evento">Ônibus do Evento</option>
                            <option value="Particular (sem alteração no valor)">Particular (sem alteração no valor)</option>
                        </select>                    
                      </div>
                      {errors.Transporte && <p className="error">Campo Pref. Transporte não deve estar vazio! Escolha uma opção!</p>}
                      <div className="relative x-23 mb-3">                     
                        <Label>Camiseta (Tamanho)</Label>
                        <select name="Camiseta" ref={register({ required: true, validate: value => value !== ''  })}>
                          <option value=""></option>
                          <option value="14">14</option>
                          <option value="16">16</option>
                          <option value="P">P</option>
                          <option value="M">M</option>
                          <option value="G">G</option>
                          <option value="GG">GG</option>
                        </select>                    
                      {errors.Camiseta && <p className="error">Campo Camiseta não deve estar vazio! Escolha uma opção!</p>}
                      </div>
                    </div>
                    
                    <div className="relative w-full mb-3">
                      <Label>Endereço</Label>
                      <input type="text" placeholder="Endereço" name="Endereco" ref={register({
                        required: true, min: 5, maxLength: 255, validate: value => value !== ''})} />
                    </div>

                    <div className="column">
                      <div className="relative x-10 mb-3">
                        <Label>Nº</Label>
                        <input type="number" placeholder="Número" name="Numero" ref={register({
                          required: true, min: 1, validate: value => value !== ''})} />
                        {errors.Numero && <p className="error">Campo Número não deve estar vazio!</p>}
                      </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>Bairro</Label>
                        <input type="text" placeholder="Bairro" name="Bairro" ref={register({
                          required: true, min: 3, maxLength: 255, validate: value => value !== ''})} />
                        {errors.Bairro && <p className="error">Campo Bairro não deve estar vazio!</p>}
                      </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>Cidade</Label>
                        <input type="text" placeholder="Cidade" name="Cidade" ref={register({
                          required: true, min: 3, maxLength: 255, validate: value => value !== ''})} />
                        {errors.Cidade && <p className="error">Campo Cidade não deve estar vazio!</p>}
                      </div>
                      <div className="relative x-23 mb-3">                     
                        <Label>CEP (Somente número)</Label>
                        <input type="number" placeholder="CEP" name="CEP" ref={register({
                          required: true, min: 8, maxLength: 9, validate: value => value !== ''})} />
                        {errors.CEP && <p className="error">Campo CEP não deve estar vazio! Max. de 8 Caracteres</p>}
                      </div>
                      <div className="relative x-10 mb-3">                     
                        <Label>UF</Label>
                        <input type="text" placeholder="UF" name="UF" ref={register({
                          required: true, min: 1, maxLength: 2, validate: value => value !== ''})} />
                        {errors.UF && <p className="error">Campo CEP não deve estar vazio! Max. de 2 Caracteres</p>}
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <Submit>ENVIAR</Submit>
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

