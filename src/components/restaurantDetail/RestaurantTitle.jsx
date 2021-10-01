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
const RestaurantTitle = (props) => {



    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (

       <Text
            style={{
                fontSize: 29,
                fontWeight: '600',
                marginTop: 10,
                marginHorizontal: 15,
            }}
       >
           {props.title}
       </Text>

    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default RestaurantTitle
