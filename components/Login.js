import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, TextInput,ImageBackground } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import {globalStyles} from '../styles/styles';

export default function Login() {
    const [email, setemail] = useState('email');
    const [password, setpassword] = useState('password');
    const [emailValidate, setEmailValidate] = useState(true);

    const submitHandler = (email,password) => {
        if(email.length > 3 && password.length > 3){
            return 'true'
        }
    }
    const validateEmail = (text,type) => {
        alph=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
        if(type == 'Email'){
            if(alph.test(text)){
                setEmailValidate(true);
            }
            else{
                setEmailValidate(false);
            }
        }
    }


    return (
        <View style={globalStyles.container}>
        <ImageBackground source={require('../assets/home_bg_1.png')} style={globalStyles.backgroundImage} >
            <Card style={styles.loginCard}>
                <Text style={[globalStyles.titleText,styles.loginInput]}>Enter Email:</Text>
                <TextInput 
                style={[styles.loginInput,!emailValidate? styles.error: null]} 
                placeholder="Email" 
                maxLength={50}
                onChangeText={(text) => validateEmail(text,'Email')}

                />
                <Text style={globalStyles.titleText}>Password:</Text>
                <TextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(value) => setpassword(value)}
                />
            </Card>
            <TouchableOpacity>
              <View style={globalStyles.buttonContainer}>
                <Button style={styles.buttonStyleContainer} 
                title="Login/Sign Up"
                submitHandler={submitHandler}
                 />
              </View>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    loginCard: {
        height:200,
        textAlignVertical:'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginInput: {
        paddingBottom: 10,
        width:'100%',        
        textAlign:'center',
        justifyContent: 'center',
    },
    error:{
        borderBottomWidth: 2,
        borderBottomColor: 'red',
    }
})