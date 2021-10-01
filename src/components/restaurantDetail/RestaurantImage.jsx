//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import { useState }         from "react"
import { useEffect }        from "react"
import { View }             from "react-native"
import { Image }            from "react-native"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const RestaurantImage = (props) => {
    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <Image
            source={{uri: props.image}}
            style={{
                width: '100%',
                height: 180
            }}
        />
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default RestaurantImage
