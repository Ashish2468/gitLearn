import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TouchableHighlight, TouchableOpacity, Image, TouchableNativeFeedback, ScrollView } from 'react-native';
import { Ionicons, Foundation, AntDesign, Entypo } from '@expo/vector-icons';

export default function Content({ navigation }) {
    return (
        <View style={{
        backgroundColor: "#00b4d8",
        flex: 1, marginTop:30,padding:10}}>
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{}}>
                        <View style={{ justifyContent: 'center',alignItems: 'center'}}>
                            <Image source={{ uri: 'https://nutom.in/wp-content/uploads/2021/05/Copy-of-Final-nutom-logo-03.png ' }}
                                style={{ width: 200, height:76 }}
                                />
                            <Text style={{ color: "#eee", fontSize: 40 }}> ABOUT NuToM </Text>
                        </View>
                        <Text style={{ color: "#eee", fontSize: 15 }}>Nurturing Tomorrow’s Minds , NuToM is an IIT Delhi Alumni startup with an aim to nurture tomorrow’s minds, making every child a better individual and imparting qualities that make him/her excel in every aspect of life.
                            https://nutom.in/wp-content/uploads/2021/05/Copy-of-Final-nutom-logo-03.png
                        </Text>
                        {/* <Text>WHAT NuToM OLYMPIAD  </Text> */}
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <View style={{}}>
                            <Text style={{ color: "#eee", fontSize: 35 }}>Mission and Vision  </Text>
                        </View>
                        <Text style={{ color: "#eee", fontSize: 15 }}> At NuToM, we envision a future where every student is able to utilise his/her capabilities to the maximum strength, be a 100% of 
                        themselves, and thrive in the society with stronger roots.
                        </Text>
                    </View>
                    <View style={{ marginTop: 25 }}>
                        <View style={{}}>
                            <Text style={{ color: "#eee", fontSize: 35 }}>WHY NuToM OLYMPIAD  </Text>
                        </View>
                        <Text style={{ color: "#eee", fontSize: 15 }}> To prepare children for the UNPREDICTABLE TOMORROW, we need to NURTURE them TODAY. We need to make them compassionate, intellectual and proficient individuals by developing their RESILIENCE, CREATIVITY AND INQUISITIVENESS.
                            Here comes NuToM Olympiad 2021 which provides students an assessment of their life skills, give insights into the scope of improvement suggests, helps students to improve on those.
                        </Text>
                    </View>
                    
                    <View style={styles.icons}>
                        <View style={{ flex: 1.2, }}>
                            <View style={styles.setIcon}>
                                <View style={{ backgroundColor: "#4361ee", alignItems: 'center', padding: 10, borderRadius: 100 }}>
                                    {/* <Feather name="trending-up" size={26} color="white" /> */}
                                    <Foundation name="social-skillshare" size={27} color="white" />
                                </View>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', paddingTop: 10 }}>
                                <Text style={{ fontSize: 13.05, color: "#eee", textAlign: 'center', }}>Socio-Emotional Skills</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: "#ddd", height: 100, width: 1, }} />
                        </View>
                        <View style={{ flex: 1, }}>
                            <View style={styles.setIcon}>
                                <View style={{ backgroundColor: "#4361ee", alignItems: 'center', padding: 10, borderRadius: 100 }}>
                                    {/* <Ionicons name="social" size={26} color="white" /> */}
                                    <AntDesign name="staro" size={26} color="white" />
                                </View>
                            </View>
                            <View style={{ flex: 1, }}>
                                <View style={{ flex: 1, alignItems: 'center', paddingTop: 6 }}>
                                    <Text style={{ fontSize: 13.05, color: "#eee", textAlign: 'center', }}>Functional Skills</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ backgroundColor: "#ddd", height: 100, width: 1, }} />
                        </View>
                        <View style={{ flex: 1, }}>
                            <View style={styles.setIcon}>
                                <View style={{ backgroundColor: "#4361ee", alignItems: 'center', padding: 10, borderRadius: 100 }}>

                                    {/* <Ionicons name="mail" size={26} color="white" /> */}
                                    <Entypo name="slideshare" size={26} color="white" />
                                </View>
                            </View>
                            <View style={{ flex: 1, }}>
                                <View style={{ flex: 1, alignItems: 'center', paddingTop: 6 }}>
                                    <Text style={{ fontSize: 13.05, color: "#eee", textAlign: 'center', }}>Knowledge based Skills</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
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
        marginTop:20,
    },
})