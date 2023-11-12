import { View, Text, TextInput, Image, StyleSheet } from 'react-native'

import Swiper from "react-native-swiper";

import { colors } from '../global/style';


import React from 'react';

const OfferSlider = () => {

    const data = [
        { id: 1, image: require('../../assets/Food1.png') },

        { id: 3, image: require('../../assets/food3.jpg') },
        { id: 4, image: require('../../assets/food4.png') },
        { id: 4, image: require('../../assets/food5.jpg') },
        { id: 1, image: require('../../assets/img1.png') },
        { id: 1, image: require('../../assets/img2.png') },
        { id: 1, image: require('../../assets/img3.png') },

    ]
    return (
        <View style={styles.OfferSlider} >
            <Swiper
                autoplay={true} autoplayTimeout={3} showsButtons={true}
                dotColor={colors.text2} activeDotColor={colors.text1}
                nextButton={<Text style={styles.buttonText}>{'>'}</Text>}
                prevButton={<Text style={styles.buttonText}>{'<'}</Text>}

            >

                {
                    data.length ? data.map((item, index) =>
                        <View key={index} style={styles.slide}>
                            <Image source={item.image} style={styles.image} />
                        </View>
                    ) : null
                }



                {/* <View style={styles.slide}>
                    <Image style={styles.image} source={require('../../assets/Food1.png')} />
                </View>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('../../assets/food2.jpg')} />
                </View>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('../../assets/food3.jpg')} />
                </View>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('../../assets/food5.jpg')} />
                </View>
                <View style={styles.slide}>
                    <Image style={styles.image} source={require('../../assets/food4.png')} />
                </View>
 */}

            </Swiper>
        </View>
    )
}



const styles = StyleSheet.create({
    OfferSlider: {
        width: '100%',
        height: 200,
        backgroundColor: colors.col1,
        marginVertical: 10,

        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    slide: {
        width: '100%',
        height: 200,
        // backgroundColor: colors.txet3,
        backgroundColor: colors.col1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    buttonText: {
        color: colors.text1,
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        height: 40,
        width: 40,
        textAlign: 'center',
        lineHeight: 28




    }


})

export default OfferSlider;