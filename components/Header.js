import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {
    const openNav = () => {
        navigation.openDrawer()
    }

    return (
            <View style={styles.header}>
                <MaterialIcons name='menu' size={28} onPress={openNav} style={styles.icon} />
                <View>
                    <Text style={styles.headerText}></Text>
                </View>
            </View>
    );
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        width:'100%',
        height:'100%',
        flexDirection: 'row',
    },
    icon: {
        position: 'absolute'
    },
    headerText: {

    }
})