const { View, Text, StyleSheet } = require("react-native")
import { Fontisto } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { titles, colors, btn1, hr80 } from '../global/style';
import { TouchableOpacity } from 'react-native';

const HomeHeadNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Fontisto name="nav-icon-list-a" size={24} color="black" style={styles.myicon} />


            <View style={styles.containerIn}>
                <Text style={styles.myText}>Foodie</Text>
                <MaterialCommunityIcons name="food-outline" size={24} color="black" style={styles.myicon} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('userprofile')}>
                <FontAwesome5 name="user-circle" size={24} color="black" style={styles.myicon} />
            </TouchableOpacity>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: colors.col1,
        elevation: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    containerIn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    myicon: {
        color: 'red'
    },
    myText: {
        color: 'red',
        fontSize: 24
    }

})
export default HomeHeadNav;