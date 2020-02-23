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
                <Text>First Name:</Text>
                <TextInput
                    placeholder="First Name:"
                />
                <Text>Last Name:</Text>
                <TextInput
                    placeholder="Last Name:"
                />
                <Text>Father's Name:</Text>
                <TextInput
                    placeholder="Father's Name"
                />
                <Text>Mother's Name:</Text>
                <TextInput
                    placeholder="Mother's Name:"
                />
                <Text>Marital Status:</Text>
                <TextInput
                    placeholder="Marital Status:"
                />
                <Text>Email Address:</Text>
                <TextInput
                    placeholder="Email"
                />
                <Dropdown
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
        fontWeight: "900",
        
        

    }
})
