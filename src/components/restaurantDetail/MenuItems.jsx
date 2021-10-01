//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from 'react'
import { ScrollView }       from 'react-native'
import { useSelector }      from 'react-redux'

import MenuItem             from './Menuitem'



//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const MenuItems = ({
    restaurantName,
    hideCheckbox,
    marginLeft,
    foods
}) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const { items } = useSelector(
        (state) => state.cartReducer.selectedItems
    )


    //-----------------------------------------------------------------
    // Internal Functions Section
    //-----------------------------------------------------------------
    const isFoodInCart = (food, cartItems) => {
        const result =  Boolean(cartItems.find(
            (item) => (item.title === food.title)
        ))
        console.log(`Result is: ${food.title} ${result}`)
        return result
    }


    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <ScrollView>
            {
                foods.map((food, index) => {
                        let checked = isFoodInCart(food, items)
                        return (<MenuItem
                            key={index}
                            food={food}
                            isChecked={checked}
                            hideCheckbox={hideCheckbox}
                            marginLeft={marginLeft}
                            restaurantName={restaurantName}
                        />)
                    })
            }
        </ScrollView>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default MenuItems
