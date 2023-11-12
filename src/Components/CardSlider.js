import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { veg, nonveg, colors } from '../global/style'

export default function CardSlider({ title, data, navigation }) {
    // console.log(title);
    //console.log(data);

    const openProductPage = (item) => {
        // console.log(item);
        navigation.navigate('productpage', item);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.cardouthead}>{title}</Text>
            <FlatList style={styles.cardsout}
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.index} onPress={() => openProductPage(item)}>
                        <View style={styles.card}>
                            <View style={styles.s1}>
                                <Image source={{ uri: item.foodImageUrl }} style={styles.cardimgin} />
                            </View>

                            <View style={styles.s2}>
                                <Text style={styles.text1}>{item.foodName}</Text>

                                <View style={styles.s2in}>
                                    <Text style={styles.text2}> Rs.{item.foodPrice}/-</Text>
                                    {item.foodType == 'veg' ? <Text style={veg}></Text> : <Text style={nonveg}></Text>}
                                </View>
                            </View>
                            <View style={styles.s3}>

                                <Text style={styles.buybtn}>Buy</Text>
                            </View>


                        </View>

                    </TouchableOpacity>

                )}
            />

        </View>

    )
}
const styles = StyleSheet.create({

    container: {
        marginVertical: 20

    },
    cardouthead: {
        color: colors.txet3,
        width: '90%',
        fontSize: 30,
        fontWeight: '200',
        borderRadius: 10,
        marginHorizontal: 10,
        //textAlign:'left'
    },
    cardsout: {
        width: "100%",
        // backgroundColor: 'yellow'
    },
    card: {
        // backgroundColor: 'aqua',
        width: 300,
        height: 300,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: colors.col1

    },
    cardimgin: {
        width: '100%',
        height: 170,
        borderRadius: 10
    },
    s2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text1: {
        fontSize: 18,
        color: colors.txet3,
        marginHorizontal: 5,
        width: 150

    },
    text2: {
        fontSize: 20,
        color: colors.text2,
        marginRight: 10
    },
    s2in: {
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10

    },
    s3: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 1,
        width: '100%'
    },
    buybtn: {
        backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center'
    }


})