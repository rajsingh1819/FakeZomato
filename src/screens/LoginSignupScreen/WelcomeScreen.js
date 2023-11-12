import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import logo from '../../../assets/logo4.png'

import { colors, hr80 } from "../../global/style";
import { firebase } from '../../../FireBase/FireBaseConfig'

const WelcomeScreen = ({ navigation }) => {
    const [userLogged, setUserLooged] = useState(null);

    useEffect(() => {
        const checklogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    // console.log(user);
                    setUserLooged(user);
                }
                else {
                    setUserLooged(null);
                    console.log("No user Logged In")
                }
            })
        }
        checklogin()

    }, [])
    // console.log(userLogged);
    const handleLogout = () => {
        firebase.auth().signOut()
            .then(() => {
                setUserLooged(null);
                console.log('User Logged Out');
            })
            .catch((error) => {
                console.log(error);
            })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Foodies</Text>
            <View style={styles.logoout}>
                <Image source={logo} style={styles.logo} />
            </View>

            <View style={hr80} />
            <Text style={styles.text}>Find the best food around you at lowest price</Text>
            <View style={hr80} />

            {userLogged == null ?
                <View style={styles.bynout}>
                    <TouchableOpacity>
                        <Text style={styles.btn} onPress={() => navigation.navigate('Signup')}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.btn} onPress={() => navigation.navigate('Login')}>Log In</Text>
                    </TouchableOpacity>
                </View>
                : <View style={styles.logged}>
                    <Text style={styles.txtlog}> Signed in as &nbsp;
                        <Text style={styles.textlogin}>{userLogged.email}</Text>
                    </Text>
                    <View style={styles.bynout}>
                        <TouchableOpacity>
                            <Text style={styles.btn} onPress={() => navigation.navigate('Home')}>Go to Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.btn} onPress={() => handleLogout()}>Log Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            }


        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff4242',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'

    },
    title: {
        fontSize: 50,
        color: colors.col1,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: "200"

    },
    logoout: {
        width: "80%",
        height: "40%",
        // backgroundColor:'#fff',
        alignItems: 'center'


    },
    logo: {
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 18,
        width: "88%",
        textAlign: 'center',
        color: colors.col1

    },
    bynout: {
        flexDirection: 'row',



    },
    btn: {
        fontSize: 15,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal: 10, //btn will be spread two direction
        fontWeight: '800',
        backgroundColor: '#fff',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10

    },
    logged: {
        alignItems: 'center'
    },
    txtlog: {
        fontSize: 20,

    },
    textlogin: {
        fontSize: 19,
        textDecorationLine: 'underline',
        color: colors.col1,
        textDecorationStyle: 'solid'
    }


})
export default WelcomeScreen;