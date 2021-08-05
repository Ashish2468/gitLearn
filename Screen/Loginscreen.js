
import React, { useState } from "react"
import { Input, Stack, Center, Heading, LogBox, ListItem, List, Button, NativeBaseProvider } from "native-base"
import * as firebase from 'firebase';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { TouchableHighlight, TouchableOpacity, Image, TouchableNativeFeedback, ScrollView } from 'react-native';
import { firebaseConfig } from '../config';
import RazorpayCheckout from 'react-native-razorpay';



if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

export default class Loginscreen extends React.Component {
    componentDidMount() {
        state = {
            text: '',
            ofClass: '',
            parentsName: '',
            Email: '',
            PhoneNo: '',
            mylist: []
        }
        const myItems = firebase.database().ref('mywishes');
        myItems.on('value', datasnap => {
            // console.table(Object.values(datasnap.val()))
            this.setState({ mylist: Object.values(datasnap.val()) })
        })
    };

    constructor() {
        super();
        this.state = {
            text: '',
            ofClass: '',
            parentsName: '',
            Email: '',
            PhoneNo: '',
            mylist: []

        }
    }

    makePayment() {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_OXwh5AjHCYu90U', // Your api key
            amount: '5000',
            name: 'foo',
            prefill: {
                email: 'void@razorpay.com',
                contact: '9191919191',
                name: 'Razorpay Software'
            },
            theme: { color: '#F37254' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
            console.log(`Error: ${error.code} | ${error.description}`);
        });



    }


    saveitem() {
        // console.log(this.state.text)
        const mywishes = firebase.database().ref('mywishes');
        mywishes.push().set({
            text: this.state.text,
            ofClass: this.state.ofClass,
            parentsName: this.state.parentsName,
            Email: this.state.Email,
            PhoneNo: this.state.PhoneNo,
            time: Date.now()
        })
        alert('your reaponse is submitted');
        this.setState({ text: '' });
        this.setState({ ofClass: '' })
        this.setState({ parentsName: '' })
        this.setState({ Email: '' })
        this.setState({ PhoneNo: '' })

    };


    render() {

        // console.log(this.state)
        // const myitems = this.state.mylist.map(item => {
        // const myitems = this.state.mylist?.map(item => {
        //     return (
        //         <ListItem>
        //             <Text>{item.text}</Text>
        //             <Text>{item.time}</Text>
        //         </ListItem>
        //     )
        // })
        return (
            <>
                <SafeAreaView style={{ flex: 1, }}>
                    <NativeBaseProvider>
                        <SafeAreaView style={{ flex: 1, }}>
                            <View style={styles.Container}>
                                <Stack space={4} w="100%">
                                    <Center>
                                        <Heading>Input Variants</Heading>
                                    </Center>
                                    <Input
                                        variant="underlined"
                                        placeholder="Candidate Name"
                                        _light={{
                                            placeholderTextColor: "blueGray.400",
                                        }}
                                        _dark={{
                                            placeholderTextColor: "blueGray.50",
                                        }}
                                        value={this.state.text}
                                        onChangeText={(text) => { this.setState({ text }) }}
                                    />
                                    <Input placeholder='Parents Name'
                                        value={this.state.parentsName}
                                        onChangeText={(parentsName) => { this.setState({ parentsName }) }}
                                    />
                                    <Input
                                        placeholder="Class"
                                        variant="underlined"
                                        _light={{
                                            placeholderTextColor: "blueGray.400",
                                        }}
                                        _dark={{
                                            placeholderTextColor: "blueGray.50",
                                        }}
                                        value={this.state.ofClass}
                                        onChangeText={(ofClass) => { this.setState({ ofClass }) }}
                                    />
                                    <Input placeholder='Email'
                                        value={this.state.Email}
                                        onChangeText={(Email) => { this.setState({ Email }) }}
                                    />
                                    <Input placeholder='Phone number'
                                        value={this.state.PhoneNo}
                                        onChangeText={(PhoneNo) => { this.setState({ PhoneNo }) }}
                                    />
                                    <Input
                                        placeholder='Coupon Code'
                                        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                                    />

                                    {/* <Input placeholder='Class' /> */}
                                <Button onPress={() => this.makePayment()}><Text>Register Now</Text></Button>
                                    <Button
                                        onPress={() => this.saveitem()}
                                    ><Text>Submit</Text></Button>
                                    <View>
                                        <TouchableOpacity></TouchableOpacity>
                                    </View>


                                </Stack>
                                {/* <List> */}
                                {/* {myitems}</List> */}
                            </View>
                        </SafeAreaView>
                    </NativeBaseProvider>
                </SafeAreaView>
            </>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: "#fff",
        flex: 1,
    },


})
