import React from 'react';
import Header from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList(){
    return(
        <div id="page-teacher-list" className="container">
            
            <Header title="Estes são os proffys disponiveís.">

                <form id="search-teachers">

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

                    <Input  type="time" name="time" label="Horário"/>
                   

                </form>
            </Header>
            
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
               
            </main>
        </div>
    )
}

export default TeacherList;