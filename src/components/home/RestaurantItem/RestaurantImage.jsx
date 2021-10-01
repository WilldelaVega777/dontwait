//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React               from "react"
import { useState }             from "react"
import { Image }                from "react-native"
import { TouchableOpacity }     from "react-native"
import MaterialCommunityIcons   from "react-native-vector-icons/MaterialCommunityIcons"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const RestaurantImage = (props) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const [favorite, setFavorite] = useState(false)


    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <>
            <Image
                source={{uri: props.url}}
                style={{
                    width: '100%',
                    height: 180
                }}
            />
            <TouchableOpacity
                onPress={() => setFavorite(!favorite)}
                style={{
                    position: 'absolute',
                    right: 20,
                    top: 20
                }}
            >
                {favorite && (
                    <MaterialCommunityIcons
                        name="heart"
                        size={25}
                        color='#ffffff'
                    />
                )}

                {(!favorite) && (
                    <MaterialCommunityIcons
                        name="heart-outline"
                        size={25}
                        color='#ffffff'
                    />
                )}

            </TouchableOpacity>
        </>
    )

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default RestaurantImage










