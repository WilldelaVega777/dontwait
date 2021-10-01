//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React               from "react"
import { useState }             from "react"
import { useEffect }            from "react"
import { View }                 from "react-native"
import RestaurantDescription    from "./RestaurantDescription"
import RestaurantImage          from "./RestaurantImage"
import RestaurantTitle          from "./RestaurantTitle"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const About = (props) => {
    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <View>
            <RestaurantImage
                image={props.image}
            />
            <RestaurantTitle
                title={props.title}
            />
            <RestaurantDescription
                description={props.description}
            />
        </View>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default About
