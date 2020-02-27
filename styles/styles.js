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
  });