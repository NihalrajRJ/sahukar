import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title}) {
    const openNav = () => {
        navigation.openDrawer()
    }

    return (
            <View style={styles.header}>
                <MaterialIcons name='menu' size={28} onPress={openNav} style={styles.icon} />
                <View>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    header: {
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        position: 'absolute',
        left: 16
    },
    headerText: {
         fontWeight: 'bold',
         fontSize: 20,
         color: '#333',
         letterSpacing: 1
    }
})