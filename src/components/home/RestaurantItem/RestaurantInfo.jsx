//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import { View }             from "react-native"
import { Text }             from "react-native"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const RestaurantInfo = (props) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',

                padding: 10
            }}
       >

            <View>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold'
                    }}
                >
                    { props.name }
                </Text>
                <Text
                    style={{
                        fontSize: 13,
                        color: 'gray'
                    }}
                >
                    30-45 · min
                </Text>
            </View>

            <View
                style={{
                    backgroundColor: '#eee',
                    height: 30,
                    width: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15
                }}
            >
                <Text>
                    { props.rating }
                </Text>
            </View>
        </View>
    )

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default RestaurantInfo
