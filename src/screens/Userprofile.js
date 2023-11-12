import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { colors, navbtnin, navbtn, novbtnout } from '../global/style';

import { firebase } from '../../FireBase/FireBaseConfig';
export default function Userprofile({ navigation }) {
    const [userLoggeduid, setUserLoogeduid] = useState(null);
    const [userdata, setUserData] = useState(null);


    useEffect(() => {
        const checklogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // console.log(user);
                    setUserLoogeduid(user.uid);
                }
                else {
                    console.log("..................");
                    setUserLoogeduid(null);
                    navigation.navigate('Login')
                    console.log("No user Logged In")
                }
            })
        }
        checklogin()

    }, [])
    // console.log("id", userLoggeduid);

    useEffect(() => {
        const getuserData = async () => {
            const docRef = firebase.firestore().collection("UserData").where
                ('uid', '==', userLoggeduid);
            const doc = await docRef.get();
            if (!doc.empty) {
                doc.forEach((doc) => {
                    // console.log("if run");
                    setUserData(doc.data());

                })
            }
            else {
                console.log('no such documents!');
                // navigation.navigate('Login');

            }
        }
        getuserData();
    }, [userLoggeduid])
    // console.log("user data", userdata);
    return (
        <View style={styles.containerout}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}
                style={novbtnout}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.head1}>Your Profile</Text>
                <View style={styles.containerin}>
                    <Text style={styles.head2}> Name:
                        {
                            userdata ? <Text style={styles.headed2in}>{userdata.name}</Text> : 'loading'
                        }


                    </Text>
                    <Text style={styles.head2}> Email:
                        {
                            userdata ? <Text style={styles.headed2in}>{userdata.email}</Text> : 'loading'
                        }


                    </Text>
                    <Text style={styles.head2}> Phone:
                        {
                            userdata ? <Text style={styles.headed2in}>{userdata.phone}</Text> : 'loading'
                        }


                    </Text>
                    <Text style={styles.head2}> Address:
                        {
                            userdata ? <Text style={styles.headed2in}>{userdata.address}</Text> : 'loading'
                        }


                    </Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    containerout: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    head1: {
        fontSize: 40,
        fontWeight: "200",
        marginVertical: 20,
        color: colors.text1
    },
    containerin: {
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.text1,
        borderRadius: 10,
        padding: 20,
        marginTop: 20
    },
    head2: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: 20
    },
    headed2in: {
        fontSize: 20,
        fontWeight: '300'

    }
})