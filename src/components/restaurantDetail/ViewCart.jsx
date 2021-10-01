//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from 'react'
import { useState }         from 'react'
import { View }             from 'react-native'
import { Text }             from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Modal }            from 'react-native'
import { useSelector }      from 'react-redux'

import CheckoutModalContent from './CheckoutModalContent'


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const ViewCart = (props) => {

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
    const [modalVisible, setModalVisible] = useState(false)


    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <CheckoutModalContent
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                    restaurantName={restaurantName}
                    items={items}
                    total={totalUSD}
                    navigation={props.navigation}
                />
            </Modal>

            { total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 20,
                        zIndex: 999
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 20,
                                backgroundColor: 'black',
                                alignItems: 'center',
                                padding: 5,
                                borderRadius: 30,
                                width: 200,
                                position: 'relative'
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 15,
                                }}
                            >
                                View Cart
                            </Text>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 10
                                }}
                            >
                                {totalUSD}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
            : (<></>) }
        </>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default ViewCart
