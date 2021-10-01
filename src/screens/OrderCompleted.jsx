//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from 'react'
import { View }             from 'react-native'
import { SafeAreaView }     from "react-native"
import { ScrollView }       from "react-native"
import { Text }             from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useSelector }      from 'react-redux'
import LottieView           from 'lottie-react-native'
import MenuItems from '../components/restaurantDetail/MenuItems'
import { NavigationContainer } from '@react-navigation/native'

//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const OrderCompleted = ({navigation}) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const { restaurantName, items } = useSelector(
        (state) => state.cartReducer.selectedItems
    )

    const total =
        items
        .map((item) => item.price.replace('$', ''))
        .reduce((previous, current) =>
            (parseFloat(previous) + parseFloat(current)),
            0
        )

    const totalUSD = total.toLocaleString("en", {
        style: 'currency',
        currency: 'USD'
    })


    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <SafeAreaView
            style={{
                backgroundColor: '#fff'
            }}
        >
            <LottieView
                style={{
                    height: 120,
                    alignSelf: 'center',
                    marginTop: 5,
                    marginBottom: 10
                }}
                source={require('../../assets/animations/check-mark.json')}
                autoPlay
                speed={0.5}
                loop={false}
            />
            <Text
                style={{
                    fontSize: 18,
                    padding: 20,
                    lineHeight: 26
                }}
            >
            Your order at&nbsp;
                <Text
                    style={{
                        fontWeight: '600'
                    }}
                >
                    { restaurantName }&nbsp;
                </Text>
            has been placed for&nbsp;
                <Text
                    style={{
                        fontWeight: '600'
                    }}
                >
                    { totalUSD }
                </Text>
            </Text>
            <ScrollView
                style={{
                    height: 310
                }}
            >
                <MenuItems
                    foods={items}
                    hideCheckbox={true}
                    marginLeft={20}
                />
            </ScrollView>
            <View
                style={{
                    flex: 1
                }}
            />
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <LottieView
                    style={{
                        height: 200,
                        alignSelf: 'center',
                        marginBottom: 40
                    }}
                    source={require('../../assets/animations/cooking.json')}
                    autoPlay
                    speed={0.5}
                    loop={true}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default OrderCompleted
