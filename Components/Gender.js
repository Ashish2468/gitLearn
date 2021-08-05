import React, { useState, Component } from 'react';
import { Text, StyleSheet, View,  Image, TouchableOpacity } from 'react-native';




export default class Gender extends Component {

    constructor(props) {
        super(props);
        this.state = {
            radioBtnsData: ['Male', 'Female', 'Prefer not to say'],
            checked: 0
        }
    }



    render() {
        return (
            <>
            <View>
                <View><Text>Gender</Text></View>
                {
                    this.state.radioBtnsData.map((data, key) => {
                        return (
                            <View key={key} style={styles.btn}>
                                {this.state.checked == key ?
                                    <View key={key} style={styles.btn}>

                                        <TouchableOpacity style={styles.btn}>
                                            <Image style={styles.img} source={require("../assets/favicon.png")} />
                                            <Text>{data}</Text>
                                        </TouchableOpacity>

                                    </View>
                                    :
                                    <TouchableOpacity onPress={() => { this.setState({ checked: key }) }} style={styles.btn}>
                                        <Image style={styles.img} source={require("../assets/icon.png")} />
                                        <Text>{data}</Text>
                                    </TouchableOpacity>
                                }
                            </View>
                        )
                    })
                }
                </View>
            </>
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
