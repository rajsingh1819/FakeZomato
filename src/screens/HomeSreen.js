import Categories from "../Components/Categories";
import HomeHeadNav from "../Components/HomeHeadNav";
import OfferSlider from "../Components/OfferSlider";
import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { colors } from "../global/style";
import { firebase } from '../../FireBase/FireBaseConfig';
import CardSlider from "../Components/CardSlider";
import { FlatList } from "react-native";
const { View, Text, StatusBar, TextInput, StyleSheet, Button, ScrollView } = require("react-native")



const HomeScreen = ({ navigation }) => {
    const [foodData, setFoodData] = useState([]);
    const todRef = firebase.firestore().collection('ProductData');

    //
    const [vegData, setVegData] = useState();
    const [nonVegData, setNonVegData] = useState();

    useEffect(() => {

        todRef.onSnapshot(snapshot => {

            setFoodData(snapshot.docs.map(doc => doc.data()))
        })

    }, [])

    useEffect(() => {
        setVegData(foodData.filter((item) => item.foodType == "veg"));
        setNonVegData(foodData.filter((item) => item.foodType == "non-veg"))

    }, [foodData])
    // console.log(foodData);
    // console.log(vegData);
    // console.log(nonVegData);
    const [search, setSearch] = useState('');
    // console.log(search);
    return (
        <ScrollView style={styles.constainer}>

            <StatusBar />
            <HomeHeadNav navigation={navigation} />
            <View style={styles.searchBox}>
                <AntDesign name="search1" size={24} color="black" style={styles.searchIcon} />
                <TextInput placeholder="search" style={styles.input} onChangeText={(item) => setSearch(item)} />

            </View>
            {search != '' && <View style={styles.searchresultouter}>
                {/* <Text>You Typed Somthing!!!</Text> */}
                <FlatList style={styles.searchresultsinner}
                    data={foodData}
                    renderItem={({ item }) => {
                        if (item.foodName.toLowerCase().includes(search.toLowerCase())) {
                            return (

                                <View style={styles.searchresult}>
                                    <AntDesign name="arrowright" size={24} color="black" />
                                    <Text style={styles.searchresultext}>{item.foodName}</Text>
                                </View>
                            )
                        }
                    }}


                />
            </View>
            }


            <Categories />
            <OfferSlider />
            <CardSlider title={"Today's Special"} data={foodData} navigation={navigation} />
            <CardSlider title={"Veg Hunger"} data={vegData} navigation={navigation} />
            <CardSlider title={"NonVeg Love"} data={nonVegData} navigation={navigation} />





        </ScrollView>
    )
}

const styles = StyleSheet.create({

    constainer: {
        flex: 1,
        width: '100%',
        // alignItems: 'center',
        backgroundColor: colors.col1

    },
    searchIcon: {
        color: colors.text1

    },
    searchBox: {
        flexDirection: 'row',
        width: "90%",
        backgroundColor: colors.col1,
        elevation: 10,
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        margin: 20


    },
    input: {
        width: '90%',
        marginLeft: 10,
        fontSize: 18,
        color: colors.text1


    },
    searchresultouter: {
        width: '100%',
        marginHorizontal: 30,
        backgroundColor: colors.col1,
    },
    searchresultsinner: {
        width: '100%'
    },
    searchresult: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,

    },
    searchresultext: {
        marginLeft: 10,
        fontSize: 18,
        color: colors.text1
    }

})

export default HomeScreen;