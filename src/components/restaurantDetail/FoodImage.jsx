//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from 'react'
import { useState }         from 'react'
import { View }             from 'react-native'
import { Image }            from 'react-native'


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const FoodImage = ({marginLeft, ...props}) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
       <View>
            <Image
                source={{uri: props.image}}
                style={{
                    width: 100,
                    height: 100,
                    borderRadius: 5,
                    marginLeft: marginLeft
                }}
            />
       </View>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default FoodImage
