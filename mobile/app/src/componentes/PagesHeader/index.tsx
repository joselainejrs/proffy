import React, { ReactNode } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PagesHeaderProps{
    title: string;
    headerRight?: ReactNode;
}

const PagesHeader: React.FC<PagesHeaderProps> = ({ title, headerRight, children }) =>{
    const {navigate} = useNavigation();
    
    function handleGoBack(){
        navigate('Landing')
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain" />
            </View>  

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>

                {headerRight}
            </View>

            {children}
        </View>
    );
}

export default PagesHeader;