import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
       backgroundColor: '#fff',
       borderWidth:1,
       borderColor: '#e6e6f0',
       borderRadius: 8,
       marginBottom:16,
       overflow: 'hidden',
    },

    profile:{
        flexDirection: 'row',
        alignItems:'center',
        padding:24,
    },
    avatar:{
        width: 64,
        height: 64,
        borderRadius:32,
        backgroundColor: '#eee',
    },
    profileInfo:{
        marginLeft: 16,
    },
    name:{
        fontFamily: 'Archivo_700Bold',
        color:'#3883c2',
        fontSize: 20,
    },
    subject:{
        fontFamily: 'Poppins_400Regular',
        color:'#3883c2',
        fontSize: 12,
        marginTop: 4,
    },

    bio:{
        fontFamily: 'Poppins_400Regular',
        color:'#3883c2',
        fontSize: 14,
        lineHeight: 24,
        marginHorizontal: 24, 
    },
    footer:{
        backgroundColor: '#fafafc',
        padding: 24,
        marginTop: 24,
        alignItems: 'center',
    },
    price:{
        fontFamily: 'Poppins_400Regular',
        color: '#3883c2',
        fontSize: 14,
    },
    priceValue:{
        fontFamily: 'Archivo_700Bold',
        color: '#3883c2',
        fontSize: 16
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 16,
    },
    heartButton:{
        backgroundColor: '#3883c2',
        width:56,
        height:56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    favorited:{
        backgroundColor:'#EBABD1',
    },

    contactButton:{
        backgroundColor: '#E66DB5',
        flex: 1,
        height:56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    contactButtonText:{
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize:16,
        marginLeft: 16,
    },
});

export default styles;