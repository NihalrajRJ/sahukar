import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';
import Navigator from '../routes/drawer';

export default function Header() {
    return (
        <>
            <Navigator />
            {/* <Text style={styles.header}>
                Sahukar
            </Text> */}
        </>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        textAlign: "center"
    }
})