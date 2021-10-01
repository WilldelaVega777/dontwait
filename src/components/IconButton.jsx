//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import { View }             from "react-native"
import { Text }             from "react-native"
import { TouchableOpacity } from "react-native"
import FontAwesome5         from "react-native-vector-icons/FontAwesome5"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const IconButton = (props) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <TouchableOpacity
            onPress={() => props.select(props.text)}
        >
            <View>
                <FontAwesome5
                    name={props.icon}
                    size={25} style={{
                        marginBottom: 3,
                        alignSelf: 'center'
                    }}
                    color={
                        (
                            (props.text===props.selected) ?
                            '#444' : '#aaa'
                        )
                    }
                />
                <Text
                    style={{
                        color:
                            (
                                (props.text===props.selected) ?
                                '#444' : '#aaa'
                            )
                    }}
                >
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default IconButton
