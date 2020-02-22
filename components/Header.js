import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';
import Navigator from '../routes/loginStack';

export default function Header(){
    return(
        <>
            <Text style={styles.header}>
                Sahukar
            </Text>
        <Navigator />
        </>
    )
}
const styles= StyleSheet.create({
    header: {
        paddingTop:40,
        textAlign:"center"
    }
})