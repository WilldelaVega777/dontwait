//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from 'react'
import { useState }         from 'react'

import { View }             from 'react-native'
import { Text }             from 'react-native'
import { StyleSheet }       from 'react-native'


//---------------------------------------------------------------------
// Styles Section
//---------------------------------------------------------------------
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: '600'
    }
})

//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const FoodInfo = (props) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <View
            style={{
                width: 200,
                justifyContent: 'space-evenly'
            }}
        >
            <Text style={styles.titleStyle}>
                {props.title}
            </Text>
            <Text
                style={{
                    maxWidth: 220
                }}
            >
                {props.description}
            </Text>
            <Text>
                {props.price}
            </Text>
        </View>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default FoodInfo
