import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
        fontFamily: 'ubuntu-regular',
        fontSize: 18
    },
    cardContainerTextHomePage: {
        color: 'white',
        fontWeight: '900',
        fontSize: 18,
        fontFamily:'ubuntu-regular'
    },
    cardContainerView1: {
        paddingTop: 10
    },
    buttonContainer: {
        alignItems: 'flex-end',
        paddingTop: 50,
    },
  });