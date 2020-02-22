import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import {globalStyles} from '../styles/styles';

export default function Login() {
    const [email, setemail] = useState('email');
    const [password, setpassword] = useState('password');

    return (
        <View style={globalStyles.container}>
            <Card style={styles.loginCard}>
                <Text style={globalStyles.titleText}>Enter Email:</Text>
                <TextInput style={styles.loginInput} placeholder="Email" />
                <Text style={globalStyles.titleText}>Password:</Text>
                <TextInput style={styles.loginInput}
                    placeholder="Password"
                    onChangeText={(value) => setpassword(value)}
                />
            </Card>
            <TouchableOpacity>
              <View style={globalStyles.buttonContainer}>
                <Button style={styles.buttonStyleContainer} title="Login/Sign Up" />
              </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    loginCard: {
        height:200,
        justifyContent: 'center',
        display: "flex",
        alignItems: 'center',
        backgroundColor: 'rgb(117,193,189)',
    },
    loginInput: {
        padding: 20
    }
})