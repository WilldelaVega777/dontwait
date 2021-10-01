//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import { View }             from "react-native"
import RestaurantImage      from "./RestaurantImage"
import RestaurantInfo       from "./RestaurantInfo"
import { TouchableOpacity } from "react-native"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const RestaurantItem = ({navigation, ...props}) => {

    //-----------------------------------------------------------------
    // Event Handler Methods Section
    //-----------------------------------------------------------------
    const button_press = (buttonText) => {
        props.press(buttonText)
    }


    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <TouchableOpacity
            activeOpacity={1}
            style={{
                marginBottom: 5
            }}
            onPress={() => {
                navigation.navigate(
                    'RestaurantDetail',
                    {
                        name: props.item['name'],
                        image: props.item['image_url'],
                        price: props.item['price'],
                        reviews: props.item['review_count'],
                        rating: props.item['rating'],
                        categories: props.item['categories']
                    }
                )
            }}
       >
            <View
                style={{
                    marginTop: 10,
                    padding: 15,
                    backgroundColor: 'white'
                }}
            >
                <RestaurantImage
                    url={props.item['image_url']}
                />
                <RestaurantInfo
                    name={props.item['name']}
                    rating={props.item['rating']}
                />
            </View>
        </TouchableOpacity>
    )

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default RestaurantItem
