//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import { Text }             from "react-native"
import { TouchableOpacity } from "react-native"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const HeaderButton = (props) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (

         <TouchableOpacity
            style={{
                backgroundColor: props.btnColor,
                paddingVertical: 6,
                paddingHorizontal: 16,
                borderRadius: 36
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text
                style={{
                    color: props.textColor,
                    fontSize: 15,
                    fontWeight: '900'
                }}
            >
                { props.text }
            </Text>
        </TouchableOpacity>

    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default HeaderButton
