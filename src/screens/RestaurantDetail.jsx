//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"

import { useEffect }        from "react"
import { View }             from "react-native"
import { Divider }          from "react-native-elements"
import { useSelector }      from 'react-redux'
import { useDispatch }      from 'react-redux'

import { cleanCart }        from '../redux/reducers/cartSlice'

import About                from "../components/restaurantDetail/About"
import MenuItems            from "../components/restaurantDetail/MenuItems"
import ViewCart             from "../components/restaurantDetail/ViewCart"

import menuItems            from '../data/menuItems'


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const RestaurantDetail = ({route, navigation}) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const {
        name, image, price, reviews, rating, categories
    } = route.params

    const formattedCategories =
        categories.map((category) => category.title).join(' • ')

    const description =
        `${formattedCategories} ${price ? ' • ' + price : ''} ` +
        `• 🌶️ • ${rating}⭐ (${reviews}+)`

    const { restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    )

    const dispatch = useDispatch()


    //-----------------------------------------------------------------
    // Eventhandler Methods Section
    //-----------------------------------------------------------------
    useEffect(() => {
        checkRestaurantName()
    }, [restaurantName])


    //-----------------------------------------------------------------
    // Internal Methods Section
    //-----------------------------------------------------------------
    const checkRestaurantName = () => {
        if (restaurantName && (name !== restaurantName))
        {
            dispatch(cleanCart())
        }
    }


    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <About
                route={route}
                image={image}
                title={name}
                description={description}
            />
            <Divider
                width={1}
                style={{
                    marginVertical: 5
                }}
            />
            <MenuItems
                restaurantName={restaurantName}
                foods={menuItems}
                restaurantName={name}
            />
            <ViewCart
                navigation={navigation}
                restaurantName={name}
            />
        </View>
    )

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default RestaurantDetail
