

const { View, Text, StyleSheet, ScrollView } = require("react-native")
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../global/style';

const Categories = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.head}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.box}>
                    <FontAwesome5 name="hamburger" size={24} color="black" style={styles.Myicon} />
                    <Text style={styles.text}>Burger</Text>

                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="pizza-slice" size={24} color="black" style={styles.Myicon} />
                    <Text style={styles.text}>Pizza</Text>

                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="coffee" size={24} color="black" style={styles.Myicon} />
                    <Text style={styles.text}>Coffee</Text>

                </View>
                <View style={styles.box}>
                    <MaterialIcons name="icecream" size={24} color="black" style={styles.Myicon} />

                    <Text style={styles.text}>Icecream</Text>

                </View>
                <View style={styles.box}>

                    <MaterialIcons name="dinner-dining" size={24} color="black" style={styles.Myicon} />
                    <Text style={styles.text}>Dinner</Text>

                </View>
                <View style={styles.box}>

                    <MaterialCommunityIcons name="food-fork-drink" size={24} color="black" style={styles.Myicon} />
                    <Text style={styles.text}>Drink</Text>

                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="hamburger" size={24} color="black" style={styles.Myicon} />
                    <Text style={styles.text}>Burger</Text>

                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="hamburger" size={24} color="black" style={styles.Myicon} />
                    <Text style={styles.text}>Burger</Text>

                </View>
                <View style={styles.box}>
                    <FontAwesome5 name="hamburger" size={24} color="black" style={styles.Myicon} />
                    <Text style={styles.text}>Burger</Text>

                </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.col1,
        elevation: 10,
        borderRadius: 10,
        padding: 10,



    },
    head: {
        color: colors.text1,
        fontSize: 25,
        fontWeight: '300',
        margin: 10,
        alignSelf: 'center',
        paddingBottom: 5,
        borderBottomColor: colors.text1,
        borderBottomWidth: 1,

    },
    box: {

        backgroundColor: colors.col1,
        elevation: 10,
        margin: 10,
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,

        justifyContent: 'center',
        flexDirection: 'row'


    },
    Myicon: {
        marginRight: 10,
        color: colors.txet3

    },
    text: {
        color: colors.txet3

    }
})
export default Categories;