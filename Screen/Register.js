import React, { useState, Component } from 'react';
import { Text, StyleSheet, View, TextInput, Button, SafeAreaView, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import Gender from '../Components/Gender';

// const [currency, setCurrency] = useState('US Dollar');
// const [value, setValue] = useState(0);
// const [hasForm, showForm] = useState(false);
// const show = () => showForm(true);
// const hide = () => showForm(false);


export default class Register extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         radioBtnsData: ['Item1', 'Item2', 'Item3'],
    //         checked: 0
    //     }
    // }




    render() {
        return (
            <SafeAreaView style={{
                flex: 1,

            }}>

                <KeyboardAvoidingView behavior="padding" disableFullscreenUI="true">
                    <View animationOutTiming={1000}
                        animationOut={'slideOutUp'}
                    // isVisible={isModalVisible}
                    >
                        <Input
                            placeholder='Candidate Name'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color='black'
                                />
                            }
                        />
                        <Input placeholder='Parents Name' />
                        <Input placeholder='Class' />
                        <Input placeholder='Phone number' />
                        <Input placeholder='Email' />



                        <Gender />
                        <Input
                            placeholder='Coupon Code'
                            leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                        />

                    </View>
                    <TouchableOpacity style={{ backgroundColor: "#4cc9f0", height: 80, width: "100%", borderRadius: 20, justifyContent: 'center', alignItems: 'center', alignContent: "center" }}
                        title="Go to Notifications"
                        onPress={() => alert("Pay Now")}
                    >
                        <Text style={{ color: "#eee", fontSize: 23 }}>Register Now  </Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    img: {
        height: 20,
        width: 20
    },
    btn: {
        flexDirection: 'row'
    }
})

