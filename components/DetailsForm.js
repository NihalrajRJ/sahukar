import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView, Card, TextInput } from 'react-native';
import { globalStyles } from '../styles/styles';

export default function DetailsForm() {

    return (
        <>
            <View style={globalStyles.container}>
                <Text>First Name:</Text>
                <TextInput
                    placeholder="First Name:"
                />
                <Text>Last Name:</Text>
                <TextInput
                    placeholder="Last Name:"
                />
                <Text>Email Address:</Text>
                <TextInput
                    placeholder="Email"
                />
            </View>
        </>
    )
}
//         <>
//         <View>
//         <Card>
//             <Text>First Name:</Text>
//             <TextInput 
//             placeholder="First Name:" 
//             />
//             <Text>Last Name:</Text>
//             <TextInput 
//             placeholder="Last Name:" 
//             />

//             <Text>Password:</Text>
//             <TextInput
//                 placeholder="Password"
//             />
//         </Card>
//           <View>
//             <Button
//             title="Submit Details"
//              />
//           </View>
//     </View>
//     </>
//     );
// }
// const styles = StyleSheet.create({
//     loginCard: {
//         height:200,
//         justifyContent: 'center',
//         display: "flex",
//         alignItems: 'center',
//         backgroundColor: 'rgb(117,193,189)',
//     },
//     loginInput: {
//         padding: 20
//     },
//     error:{
//         borderWidth: 2,
//         borderColor: 'red'
//     }
// })
