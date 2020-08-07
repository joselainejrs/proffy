import React from 'react';
import Input from '../../components/Input';
import Header from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';


function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">

         <Header title="Que incrivel que você quer dar aulas."
         description="O primeiro passo é preencher esse formulário de inscrição"
         />

         <main>
             <fieldset> 
                <legend>Seu dados</legend>

                <Input name="name" label="Nome Completo"/>
                <Input name="avatar" label="Avatar"/>
                <Input name="whatsapp" label="Whatsapp"/>
                <Textarea name="bio" label="Biografia"/>

             </fieldset>

             <fieldset> 
                <legend>Sobre a aula</legend>

                <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                        {value: 'Português', label: 'Português'},
                        {value: 'Matemática', label: 'Matemática'},
                        {value: 'História', label: 'História'},
                        {value: 'Geografia', label: 'Geografia'},
                        {value: 'Ciência', label: 'Ciência'},
                        {value: 'Biologia', label: 'Biologia'},
                        {value: 'Educação Física', label: 'Educação Física'},
                        {value: 'Física', label: 'Física'},
                        {value: 'Química', label: 'Química'},
                        {value: 'Artes', label: 'Artes'},
                    ]}
                    
                />
                <Input name="cost" label="Custo da sua hora por aula"/>
                
             </fieldset>      

             <fieldset>
                 <legend>Horários Disponiveis
                    <button type="button">+ Novo Horário</button>
                 </legend>

                 <div className="schedule-item">
                    <Select 
                            name="week-day" 
                            label="Dia da Semana"
                            options={[
                                {value: '0', label: 'Domingo'},
                                {value: '1', label: 'Segunda-Feira'},
                                {value: '2', label: 'Terça-Feira'},
                                {value: '3', label: 'Quarta-Feira'},
                                {value: '4', label: 'Quinta-Feira'},
                                {value: '5', label: 'Sexta-Feira'},
                                {value: '6', label: 'Sabado'},
                            ]}
                        />

                    <Input name="from" label="Das" type="time" />                     
                    <Input name="to" label="Até" type="time" />                     
                 </div>
                 
             </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante" />
                    Importante! <br/>
                    Preenvha todod os dados 
                </p>
                 <button type="button">
                    Salvar Cadastro
                 </button>
            </footer>
        </main>
    </div>
    )
}

export default TeacherForm;