import React, {useState } from 'react';
import { Text,  View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { BorderlessButton, RectButton, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import TeacherItem, { Teacher } from '../../componentes/TeacherItem';

import api from '../../services/api';

// import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import PagesHeader from '../../componentes/PagesHeader';

import styles from './styles';




function TeacherList(){
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isfiltersVisible, setfiltersVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    
    //botao favoritos
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritesTeachers = JSON.parse(response);
                const favoritesTeachersIds = favoritesTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                });
    
                setFavorites(favoritesTeachersIds);
            }
        });
    }

    useFocusEffect(() =>{
        loadFavorites();
    });

    // filtro
    function handleToggleFiltersVisible(){
        setfiltersVisible(!isfiltersVisible);    
    }

    //button
    async function handleFilterSubmit(){
        loadFavorites();  

        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time,
            }
        });
            setfiltersVisible(false);
            setTeachers(response.data);
        }

    return (
        <View style={styles.container}>
           <PagesHeader 
                title="Proffys Disponiveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={25} color="#fff" />
                    </BorderlessButton>
                )}
           
           >
                { isfiltersVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Materia</Text>
                        <TextInput
                            style={styles.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a Máteria?" 
                            placeholderTextColor="#c1bccc"

                        />

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    style={styles.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Qual o dia?" 
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    style={styles.input}
                                    placeholder="Qual Horario?" 
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>
                        <RectButton 
                            style={styles.filtroButton}
                            onPress={handleFilterSubmit}
                            >
                            <Text style={styles.filtroText}>Buscar</Text>
                        </RectButton>
                    </View>
                )}
            </PagesHeader>
            
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                    <TeacherItem  
                        key={teacher.id} 
                        teacher={teacher} 
                        favorited={favorites.includes(teacher.id)}
                        /> 
                    )
                })}
            
            </ScrollView>
        </View>
    );
}

export default TeacherList;