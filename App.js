import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import Login from './components/Login';
import Navigator from './routes/loginStack';

export default function App() {
  return (
      <Navigator/>
    // <>
    //   <SafeAreaView style={styles.container}>
    //     <ScrollView style={styles.scrollView}>
    //       <View style={styles.container}>
    //       <TouchableOpacity>
    //            <Button onClick='callLoginPage()'>
    //              Login <Login/>
    //            </Button>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <View style={styles.cardContainerView}>
    //             <Card style={styles.card1}>
    //               <Text style={styles.cardContainerText1}>Daily Expenses</Text>
    //             </Card>
    //           </View>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <View style={styles.cardContainerView1}>
    //             <Card style={styles.card2}>
    //               <Text style={styles.cardContainerText2}>Monthly Expenses</Text>
    //             </Card>
    //           </View>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <View style={styles.cardContainerView2}>
    //             <Card style={styles.card3}>
    //               <Text style={styles.cardContainerText3}> Medical Expenses</Text>
    //             </Card>
    //           </View>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <View style={styles.cardContainerView3}>
    //             <Card style={styles.card4}>
    //               <Text style={styles.cardContainerText4}> Cash For Education</Text>
    //             </Card>
    //           </View>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <View style={styles.cardContainerView4}>
    //             <Card style={styles.card5}>
    //               <Text style={styles.cardContainerText5}> Gifts for Parents/Loved Ones</Text>
    //             </Card>
    //           </View>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <View style={styles.cardContainerView5}>
    //             <Card style={styles.card6}>
    //               <Text style={styles.cardContainerText6}> Party Expenses</Text>
    //             </Card>
    //           </View>
    //         </TouchableOpacity>
    //         <TouchableOpacity>
    //           <View style={styles.buttonContainer}>
    //             <Button style={styles.buttonStyleContainer} title='Submit' />
    //           </View>
    //         </TouchableOpacity>
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     alignItems: 'flex-end',
//     paddingTop: 50,
//   },
//   card1: {
//     backgroundColor: "rgb(157,191,104)",
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 70
//   },
//   card2: {
//     backgroundColor: 'rgb(117,193,189)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 70
//   },
//   card3: {
//     backgroundColor: 'rgb(214,145,140)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 70,
//   },
//   card4: {
//     backgroundColor: '#F6C650',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 70,
//   },
//   card5: {
//     backgroundColor: 'rgb(230,178,120)',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 70,
//   },
//   card6: {
//     backgroundColor: '#F68250',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: 70,
//   },
//   cardContainerText1: {
//     color: 'white',
//     fontWeight: '900',
//     fontSize: 18,
//   },
//   cardContainerText2: {
//     color: 'white',
//     fontWeight: '900',
//     fontSize: 18,
//   },
//   cardContainerText3: {
//     color: 'white',
//     fontWeight: '900',
//     fontSize: 18,
//   },
//   cardContainerText4: {
//     color: 'white',
//     fontWeight: '900',
//     fontSize: 18,
//   },
//   cardContainerText5: {
//     color: 'white',
//     fontWeight: '900',
//     fontSize: 18,
//   },
//   cardContainerText6: {
//     color: 'white',
//     fontWeight: '900',
//     fontSize: 18,
//   },
//   cardContainerView1: {
//     paddingTop: 10
//   },
//   cardContainerView2: {
//     paddingTop: 10
//   },
//   cardContainerView3: {
//     paddingTop: 10
//   },
//   cardContainerView4: {
//     paddingTop: 10
//   },
//   cardContainerView5: {
//     paddingTop: 10
//   },
//   cardContainerView: {
//     paddingTop: 40
//   },
// });
