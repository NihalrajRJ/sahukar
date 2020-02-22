import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Card } from 'react-native-shadow-cards';

export default function Login() {
    const [email, setemail] = useState('email');
    const [password, setpassword] = useState('password');

    return (
        <View style={styles.container}>
            <Card style={styles.loginCard}>
                <Text>Enter Email:</Text>
                <TextInput placeholder="Email" />
                <Text style={styles.inputPassword}>Password:</Text>
                <TextInput
                    placeholder="Password"
                    onChangeText={(value) => setpassword(value)}
                />
            </Card>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginCard: {
        paddingTop: 50
    },
    inputPassword: {
        width: 200
    }
})