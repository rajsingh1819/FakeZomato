import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { titles, colors, btn1, hr80 } from "../../global/style";
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { firebase } from '../../../FireBase/FireBaseConfig'




const LoginScreen = ({ navigation }) => {
    const [emailfocus, setEmailfocus] = useState(false);
    const [passwordfocus, setPasswordlfocus] = useState(false);
    const [showPasswordfocus, setShowPasswordfocus] = useState(false);

    //get data from input field
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customError, setCustomError] = useState('')

    const handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log("Logged in Sucessfully !!!")
                // console.log(user);
                navigation.navigate('welcomepage');
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
                if (errorMessage === 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
                    setCustomError('Please enter a valid email address')
                }
                else {
                    setCustomError('incorrect email and password')
                }
            })

    }

    return (
        <View style={styles.container} >
            <Text style={styles.head1}>Log in </Text>
            {customError !== '' && <Text style={styles.errormsg}>{customError}</Text>}
            <View style={styles.inputOut}>
                <EvilIcons name="user" size={38} color={emailfocus === true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} placeholder="Email"
                    onFocus={() => { setEmailfocus(true), setPasswordlfocus(false), setShowPasswordfocus(false) }} onChangeText={(text) => setEmail(text)} />

            </View>
            <View style={styles.inputOut}>
                <EvilIcons name="lock" size={38} color={passwordfocus === true ? colors.text1 : colors.text2} />
                <TextInput style={styles.input} secureTextEntry={showPasswordfocus === false ? true : false} placeholder="Password"
                    onFocus={() => { setPasswordlfocus(true), setEmailfocus(false) }} onChangeText={(text) => setPassword(text)} />
                <Feather name={showPasswordfocus === false ? "eye-off" : "eye"} size={24} color="black" onPress={() => setShowPasswordfocus(!showPasswordfocus)} />


            </View>

            <TouchableOpacity style={btn1} onPress={() => handleLogin()} >
                {/* <TouchableOpacity style={btn1} onPress={() => navigation.navigate('Home')} > */}
                <Text style={{ color: colors.col1, fontSize: titles.btntext, fontWeight: 'bold' }}>Log In</Text>
            </TouchableOpacity>

            <Text style={styles.fogot}>Forgot Password</Text>
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
            <Text  >Don't have a account ?<Text style={styles.signup} onPress={() => navigation.navigate('Signup')}> Sign Up</Text></Text>


        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'

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
        elevation: 20

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
        marginVertical: 10

    },
    gf: {
        flexDirection: 'row'
    },
    gficon: {
        backgroundColor: 'white',
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 9,
        alignItems: 'center',
        elevation: 20

    },
    signup: {
        color: colors.text1,

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

})

export default LoginScreen;