import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';
import styles from './styles';


function GiveClasses(){
    const {navigate} = useNavigation();

    function handeleNavigateTeacherForm(){
        navigate('TeacherForm');
    }
    function handleGoBack(){
        navigate('Landing');
    }
    return (
        <View style={styles.container}>
            <View style={styles.contentHeader}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain" />
            </View>  
            <ImageBackground 
                resizeMode="contain" 
                source={giveClassesBgImage} 
                style={styles.content}
            >
                    <Text style={styles.title}>Quer ser um Proffy?</Text>
                    <Text style={styles.description}>Clique no botão para começar</Text>
            </ImageBackground>

           <RectButton 
                onPress={handeleNavigateTeacherForm}
                style={styles.okButton}>
               <Text style={styles.okButtonText}>Cadastrar</Text>
           </RectButton>
        </View>
    );
}

export default GiveClasses;