import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';


import PagesHeader from '../../componentes/PagesHeader';
import TeacherItem, { Teacher } from '../../componentes/TeacherItem';
import styles from './styles';


function TeacherList(){
    const [favorites, setFavorites] = useState([]);

    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            if(response){
                const favoritesTeachers = JSON.parse(response);
    
                setFavorites(favoritesTeachers);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    }, []);

    return (
        <View style={styles.container}>
            <PagesHeader title="Meus Proffys Favoritos" />
            
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return(
                        <TeacherItem 
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                            />
                    )
                })}
            
            </ScrollView>
        </View>
    );
}

export default TeacherList;     