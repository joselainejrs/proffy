import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#3883c2',
        justifyContent: 'center',
        padding:40,
    },
    contentHeader:{
        paddingTop: 20,
        flexDirection:'row',
        alignItems:'center',
        color:'#d4c2ff',
        justifyContent:'space-between',
    },

    content:{
        flex: 1,
        justifyContent: 'center',
    },

    title:{
        fontFamily:'Archivo_700Bold',
        color: '#fff',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },

    description:{
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 250      
    },

    okButton:{
        marginVertical:40,
        backgroundColor: '#E66DB5',
        height:58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },

    okButtonText:{
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize:20,
    },

});

export default styles;