import React, { FormEvent, useState } from 'react';
import Header from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';
import api from '../../services/api';


function TeacherList(){
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

    const response = await api.get('classes', {
        params:{
            subject,
            week_day,
            time,
        }
    });

        setTeachers(response.data);
    }
    return(
        <div id="page-teacher-list" className="container">
            
            <Header title="Estes são os proffys disponiveís.">

                <form onSubmit={searchTeachers} id="search-teachers">

                    <Select
                        name="subject" 
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {setSubject(e.target.value) }}
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
                        name="week_day" 
                        label="Dia da Semana"
                        value={week_day}
                        onChange={(e) => {setWeekDay(e.target.value) }}
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

                    <Input  
                        type="time" 
                        name="time" 
                        label="Horário"
                        value={time}
                        onChange={(e) => {setTime(e.target.value) }}
                        />

                    <button type="submit">
                        Buscar</button>                  

                </form>
            </Header>
            
            <main>
                {teachers.map((teacher: Teacher) =>{
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    )
}

export default TeacherList;