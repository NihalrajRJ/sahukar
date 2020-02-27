import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, Card, TextInput } from 'react-native';
import { globalStyles } from '../styles/styles';
import { Dropdown } from 'react-native-material-dropdown';

export default function DetailsForm() {

    const data = [{
        value: 'Daliy Expenses',
    }, {
        value: 'Monthly Expenses',
    }, {
        value: 'Medical Expenses',
    }, {
        value: 'Cash For Education',
    }, {
        value: 'Gifts for Loved Ones',
    },{
        Value: 'Party Expenses'
        
        
    }];

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.formData}>First Name:</Text>
                <TextInput
                    style={styles.formData}
                    placeholder="First Name:"
                />
                <Text style={styles.formData}>Last Name:</Text>
                <TextInput
                    style={styles.formData}
                    placeholder="Last Name:"
                />
                <Text style={styles.formData}>Father's Name:</Text>
                <TextInput
                    style={styles.formData}
                    placeholder="Father's Name"
                />
                <Text style={styles.formData}>Mother's Name:</Text>
                <TextInput
                    style={styles.formData}
                    placeholder="Mother's Name:"
                />
                <Text style={styles.formData}>Marital Status:</Text>
                <TextInput
                    style={styles.formData}
                    placeholder="Marital Status:"
                />
                <Text style={styles.formData}>Email Address:</Text>
                <TextInput
                    style={styles.formData}
                    placeholder="Email"
                />
                <Dropdown style={[styles.cashType]}
                    label='Cash Type'
                    data={data}
                />
            </View>
        </>
    )
}
 const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent: 'center',
        textAlign:'center',

    },
    formData:{
        width:'100%',
        textAlign:'center',
        justifyContent: 'center',
        padding:10,
    },
    cashType:{
        width:'50%'
    }
})
