//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from 'react'
import { useState }         from 'react'
import { StyleSheet }       from 'react-native'
import { View }             from 'react-native'
import { Text }             from 'react-native'
import { TouchableOpacity } from 'react-native'

import LottieView           from 'lottie-react-native'

import OrderItem            from './OrderItem'
import Subtotals            from './Subtotals'

import CartService          from '../../services/Cart'


//---------------------------------------------------------------------
// Styles Section
//---------------------------------------------------------------------
const style = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },

    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 520,
        borderWidth: 1,
        width: '100%',
        alignItems: 'center',
        paddingBottom: 25
    },

    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10
    }
})


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const CheckoutModalContent = ({
    navigation,
    restaurantName,
    items,
    total,
    ...props
}) => {
    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const [loading, setLoading] = useState(false)


    //-----------------------------------------------------------------
    // Internal Functions Section
    //-----------------------------------------------------------------
    const saveData = async () => {
        setLoading(true)

        await CartService.saveCart({
            restaurantName,
            items
        })

        setTimeout(() => {
            setLoading(false)
            props.setModalVisible(false)
            navigation.navigate('OrderCompleted')
        }, 2500)
    }

    //-----------------------------------------------------------------
    const goBack = () => {
        props.setModalVisible(false)
    }


    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <>
            <View style={style.modalContainer}>
                <View>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 30
                        }}
                    >
                        <View style={style.modalCheckoutContainer}>

                            {/* Title */}
                            <Text style={style.restaurantName}>
                                { restaurantName }
                            </Text>

                            {/* Content */}
                            {
                                items.map((food, key) => (
                                    <OrderItem
                                        key={key}
                                        title={food.title}
                                        price={food.price}
                                    />
                                ))
                            }

                            <Subtotals
                                subtotal={total}
                            />

                            {/* Padding */}
                            <View
                                style={{
                                    flex: 1
                                }}
                            />

                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                {/* Cancel Button */}
                                <TouchableOpacity
                                    onPress={() => goBack()}
                                >
                                    <View
                                        style={{
                                            backgroundColor: 'black',
                                            padding: 7,
                                            borderRadius: 30,
                                            width: 150,
                                            height: 44,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginRight: 10
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontWeight: '600'
                                            }}
                                        >
                                            Go back
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                {/* Checkout Button */}
                                <TouchableOpacity
                                    onPress={() => saveData()}
                                >
                                    <View
                                        style={{
                                            backgroundColor: 'black',
                                            padding: 7,
                                            borderRadius: 30,
                                            width: 150,
                                            alignItems: 'center'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: 'white',
                                                fontWeight: '600'
                                            }}
                                        >
                                            Checkout
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 11,
                                                color: 'white'
                                            }}
                                        >
                                            { total }
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            {loading ?
                <View
                    style={{
                        position: 'absolute',
                        flex: 1,
                        opacity: 0.6,
                        backgroundColor: '#000',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        width: '100%',
                        height: '100%',
                        zIndex: 900
                    }}
                >
                    <LottieView
                        style={{
                            height: 120,
                            alignSelf: 'center'
                        }}
                        source={
                            require(
                                '../../../assets/animations/scanner.json'
                            )
                        }
                        autoPlay
                        speed={3}
                        loop={true}
                    />
                </View>
            : (<></>) }
        </>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default CheckoutModalContent
