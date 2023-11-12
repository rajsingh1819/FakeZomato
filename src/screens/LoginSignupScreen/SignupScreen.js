


import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { titles, colors, btn1, hr80 } from "../../global/style";
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import { firebase } from '../../../FireBase/FireBaseConfig'



const SignupScreen = ({ navigation }) => {

    const [namefocus, setNamefocus] = useState(false);
    const [emailfocus, setEmailfocus] = useState(false);
    const [phonefocus, setPhonefocus] = useState(false);

    const [passwordfocus, setPasswordfocus] = useState(false);
    const [showPasswordfocus, setShowPasswordfocus] = useState(false);


    const [cpasswordfocus, setCPasswordfocus] = useState(false);
    const [showcPasswordfocus, setShowcPasswordfocus] = useState(false);

    //get data from input filed
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [address, setAddress] = useState('');

    //eroor
    const [customError, setCustomError] = useState('');
    const [sucessmsg, setSucessmsg] = useState(null);
    function handleSignup() {
        const Formdata = {
            name: name,
            email: email,
            phone: phone,
            password: password,
            // cPassword:cPassword,
            address: address


        }

        if (password != cPassword) {
            setCustomError("Password Doesn't Match");
            alert("Password Doesn't Match")
            return

        }
        else if (phone.length != 10) {
            setCustomError("Phone Number Should be 10 Digits")
            alert("Phone Number Should be 10 Digits")
            return
        }
        try {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredentials) => {

                    // console.log(userCredentials?.user.uid);
                    console.log("user Created");

                    if (userCredentials?.user.uid) {
                        const userRef = firebase.firestore().collection('UserData')
                        userRef.add(
                            {
                                name: name,
                                email: email,
                                phone: phone,
                                password: password,
                                // cPassword:cPassword,
                                address: address,
                                uid: userCredentials?.user.uid



                            }
                        ).then(() => {

                            console.log("Data Added to FireStore")
                            setSucessmsg("User Created Successfully")
                        }).catch((error) => {
                            console.log("FireBase error", error);
                            setCustomError("Invalid Email")
                        }

                        )
                    }



                })
                .catch((error) => {
                    console.log("sign up error", error.message);
                    if (error.message == "Firebase: The email address is already in use by another account. (auth/email-already-in-use).") {
                        setCustomError("Email already exists")
                        return
                    }
                    else if (error.message == "Firebase: The email address is badly formatted. (auth/invalid-email).") {
                        setCustomError("Email Format is wrong ")
                        return
                    }



                })

        }
        catch (error) {
            console.log("sign up sydtem error", error.message);


        }


    }

    return (

        <View >
            {sucessmsg == null ?
                <ScrollView>
                    <View style={styles.container} >

                        <Text style={styles.head1}>Sign Up </Text>
                        {customError !== '' && <Text style={styles.errormsg}>{customError}</Text>}
                        <View style={styles.inputOut}>

                            <EvilIcons name="user" size={35} color={namefocus === true ? colors.text1 : colors.text2} />
                            <TextInput style={styles.input} placeholder="Full Name" onFocus={() => {
                                setNamefocus(true),
                                    setEmailfocus(false), setPasswordfocus(false), setShowPasswordfocus(false), setCPasswordfocus(false),
                                    setShowcPasswordfocus(false), setPhonefocus(false), setCustomError('')
                            }} onChangeText={(text) => setName(text)} />

                        </View>
                        <View style={styles.inputOut}>
                            <Entypo name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
                            {/* <EvilIcons name="user" size={38} color={emailfocus === true ? colors.text1 : colors.text2} /> */}
                            <TextInput style={styles.input} placeholder="Email" onFocus={() => {
                                setEmailfocus(true), setPasswordfocus(false), setShowPasswordfocus(false),
                                    setCPasswordfocus(false), setShowcPasswordfocus(false), setNamefocus(false), setPhonefocus(false), setCustomError('')
                            }} onChangeText={(text) => setEmail(text)} />

                        </View>
                        <View style={styles.inputOut}>
                            <Octicons style={{ marginLeft: 5 }} name="device-mobile" size={24} color={phonefocus === true ? colors.text1 : colors.text2} />

                            <TextInput style={styles.input} placeholder="Phone Number" onFocus={() => {
                                setPhonefocus(true),
                                    setNamefocus(false),
                                    setEmailfocus(false), setPasswordfocus(false), setShowPasswordfocus(false), setCPasswordfocus(false),
                                    setShowcPasswordfocus(false), setCustomError('')
                            }} onChangeText={(text) => setPhone(text)} />

                        </View>
                        {/* pass */}
                        <View style={styles.inputOut}>
                            <EvilIcons name="lock" size={30} color={passwordfocus === true ? colors.text1 : colors.text2} />
                            <TextInput style={styles.input} secureTextEntry={showPasswordfocus === false ? true : false} placeholder="Password" onFocus={() => {
                                setPasswordfocus(true),
                                    setEmailfocus(false), setCPasswordfocus(false), setShowcPasswordfocus(false), setNamefocus(false), setPhonefocus(false), setCustomError('')
                            }} onChangeText={(text) => setPassword(text)} />
                            <Feather name={showPasswordfocus === false ? "eye-off" : "eye"} size={24} color="black" onPress={() => setShowPasswordfocus(!showPasswordfocus)} />


                        </View>
                        {/* confirm pass */}
                        <View style={styles.inputOut}>
                            <EvilIcons name="lock" size={30} color={cpasswordfocus === true ? colors.text1 : colors.text2} />
                            <TextInput style={styles.input} secureTextEntry={showcPasswordfocus === false ? true : false} placeholder="Confirm Password" onFocus={() => {
                                setCPasswordfocus(true), setPasswordfocus(false),
                                    setEmailfocus(false), setShowPasswordfocus(false), setNamefocus(false), setPhonefocus(false), setCustomError('')
                            }} onChangeText={(text) => setCPassword(text)} />
                            <Feather name={showcPasswordfocus === false ? "eye-off" : "eye"} size={24} color="black" onPress={() => setShowcPasswordfocus(!showcPasswordfocus)} />
                        </View>

                        <Text style={styles.address}>Please enter Your Address</Text>
                        <View style={styles.inputOut}>
                            <TextInput style={styles.input1} placeholder="Enter Your Address" onChangeText={(text) => setAddress(text)}
                                onFocus={() => {
                                    setAddress(true)
                                    setCPasswordfocus(false), setPasswordfocus(false), setShowcPasswordfocus(false),
                                        setEmailfocus(false), setShowPasswordfocus(false), setNamefocus(false), setPhonefocus(false), setCustomError('')
                                }}
                            />

                        </View>

                        <TouchableOpacity style={btn1} onPress={handleSignup} >
                            <Text style={{ color: colors.col1, fontSize: titles.btntext, fontWeight: 'bold' }}>Sign Up</Text>
                        </TouchableOpacity>

                        {/* <Text style={styles.fogot}>Forgot Password</Text> */}
                        <Text style={styles.or}>OR</Text>
                        <Text style={styles.gfText}>Sign In with</Text>
                        <View style={styles.gf}>
                            <TouchableOpacity>
                                <Text style={styles.gficon}>  <AntDesign name="google" size={24} color="red" /></Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.gficon}>   <FontAwesome name="facebook" size={24} color="#426782" /></Text>

                            </TouchableOpacity>
                        </View>
                        <View style={hr80} />
                        <Text  >Already have an account ?<Text style={styles.signup} onPress={() => navigation.navigate('Login')}> Log In</Text></Text>


                    </View>
                </ScrollView>
                :
                <View style={styles.container1}>
                    <Text style={styles.sucessmessage}> {sucessmsg}</Text>
                    <TouchableOpacity style={btn1} onPress={() => navigation.navigate('Login')} >
                        <Text style={{ color: colors.col1, fontSize: titles.btntext, fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btn1} onPress={() => setSucessmsg(null)} >
                        <Text style={{ color: colors.col1, fontSize: titles.btntext, fontWeight: 'bold' }}>Go Back</Text>
                    </TouchableOpacity>


                </View>

            }
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 100

    },
    container1: {
        // flex: 1,
        display: 'flex',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "70%"

    },
    head1: {
        fontSize: titles.title1,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 10
    },
    inputOut: {
        flexDirection: 'row',
        width: "80%",
        marginVertical: 10,
        backgroundColor: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        alignSelf: 'center',
        elevation: 20,
        borderRadius: 10

    },
    input: {
        fontSize: 18,
        marginLeft: 10,
        width: '80%'

    },
    fogot: {
        color: colors.text2,
        marginTop: 20,
        marginBottom: 10
    },
    or: {
        color: colors.text1,
        fontWeight: 'bold',

        marginVertical: 10
    },
    gfText: {
        color: colors.text2,

        fontSize: 25,
        marginVertical: 5

    },
    gf: {
        flexDirection: 'row'
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        marginHorizontal: 10,
        borderRadius: 10,
        padding: 9,
        alignItems: 'center',
        elevation: 20

    },
    signup: {
        color: colors.text1,

    },
    address: {
        fontSize: 15,
        color: colors.text2,
        textAlign: 'center',
        marginTop: 20

    },
    input1: {
        padding: 10,
        fontSize: 20
    },
    errormsg: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10

    },
    sucessmessage: {
        marginBottom: 5,
        color: 'green',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    }


})



export default SignupScreen;