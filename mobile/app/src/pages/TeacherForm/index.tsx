import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import PagesHeader from '../../componentes/PagesHeader';
import styles from './styles';


function TeacherList(){

    return (
        <View style={styles.container}>
            <PagesHeader />
            
        </View>
    );
}

export default TeacherList;