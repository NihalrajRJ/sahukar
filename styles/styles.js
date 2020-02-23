import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    titleText: {
        fontFamily: 'ubuntu-regular',
        fontSize: 18
    },
    cardContainerTextHomePage: {
        color: 'rgb(117,193,189)',
        fontWeight: '900',
        fontSize: 18,
        fontFamily:'ubuntu-regular',
        alignItems: 'center',
        textAlign:'center',
        justifyContent:"center"
    },
    buttonContainer: {
        alignItems: 'center',
        paddingTop: 10
    },
  });