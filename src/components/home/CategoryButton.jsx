//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import { View }             from "react-native"
import { Image }            from "react-native"
import { Text }             from "react-native"
import { ScrollView }       from "react-native"
import { TouchableOpacity } from "react-native"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const CategoriesButton = (props) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------



    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <TouchableOpacity
            style={{
                backgroundColor: ((props.text===props.selectedCategory) ? '#aaa' : '#fff'),
                marginRight: 10,
                padding: 10,
                borderRadius: 10
            }}
            onPress={() => props.selectCategory(props.text)}
        >
            <View
                style={{
                    alignItems: 'center',
                }}
            >
                <Image
                    source={props.image}
                    style={{
                        width: 50,
                        height: 40,
                        resizeMode: 'contain'
                    }}
                    />
                <Text
                    style={{
                        fontSize:13,
                        fontWeight:'900'
                    }}
                    >
                    { props.text }
                </Text>
            </View>
        </TouchableOpacity>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default CategoriesButton

//
