//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import RestaurantItem      from "./RestaurantItem"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const RestaurantItems = ({navigation, ...props}) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <>
            {
                props.items.map((restaurant, index) => (
                        <RestaurantItem
                        key={index}
                        item={restaurant}
                        navigation={navigation}
                    />
                ))
            }
        </>
    )

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default RestaurantItems
