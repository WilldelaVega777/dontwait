//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from 'react'
import { useState }         from 'react'

import { View }             from 'react-native'
import { Text }             from 'react-native'


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const OrderItem = ({title, price}) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#999',
                width: '100%'
            }}
        >
            <Text
                style={{
                    fontWeight: '600',
                    fontSize: 16
                }}
            >
                { title }
            </Text>
            <Text
                style={{
                    opacity: 0.7,
                    fontSize: 16
                }}
            >
                { price }
            </Text>
        </View>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default OrderItem
