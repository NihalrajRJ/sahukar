import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    titleText: {
        fontFamily: 'ubuntu-regular',
        fontSize: 18
    },
    cardContainerTextHomePage: {
        fontWeight: '700',
        fontSize: 16,
        fontFamily:'ubuntu-bold',
        alignItems: 'center',
        textAlign:'center',
        justifyContent:"center"
    },
    buttonContainer: {
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 20
    },
    backgroundImage:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
  });