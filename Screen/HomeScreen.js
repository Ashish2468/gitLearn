import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import { TouchableHighlight, TouchableOpacity, Image, TouchableNativeFeedback, ScrollView } from 'react-native';
import Content from '../Components/Content';
import RNUpiPayment from 'react-native-upi-payment';

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1,
            // backgroundColor: "#ddd",

        }}>
            <View style={{
                // backgroundColor: "#eee",
                flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0
            }}>
                <ScrollView >
                    <Content />

                </ScrollView>
                <View>



                    <View style={{ backgroundColor: "#4cc9f0", borderRadius: 20, }}>
                        <TouchableOpacity style={{ height: 80, width: "100%", justifyContent: 'center', alignItems: 'center', alignContent: "center" }}
                            title="Go to Notifications"
                            // onPress={() => navigation.navigate('Register')}
                            onPress={() => navigation.navigate('LoginScreen')}>
                             <Text style={{ color: "#eee", fontSize: 23 }}>Register Now  </Text> 
                             </TouchableOpacity>
                         {/* <Button title="hi hello" onPress={() => navigation.navigate('LoginScreen')}/> */}
                        
                            {/* <Button title="hi hello" onPress={() => {
                                RNUpiPayment.initializePayment({
                                    vpa: 'ofb911@okhdfcbank', // or can be john@ybl or mobileNo@upi
                                    payeeName: 'John Doe',
                                    amount: '1',
                                    transactionRef: 'aasf-332-aoei-fn'
                                }, () => console.log('success'), () => console.log('success'));
                            }} /> */}
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    setIcon: {
        alignItems: 'center',
        alignContent: "center",
        justifyContent: 'center',
        flex: 1,

    },
    icons: {
        width: "100%",
        height: 140,
        // backgroundColor: "green",
        flexDirection: "row",
    },
})