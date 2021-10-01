//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from 'react'
import { View }             from 'react-native'
import { Text }             from 'react-native'
import { StyleSheet }       from 'react-native'


//---------------------------------------------------------------------
// Styles Section
//---------------------------------------------------------------------
const style = StyleSheet.create({
    subtotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10
    },

    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        width: '100%'
    }
})

//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const Subtotals = ({subtotal}) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <View style={style.subtotalContainer}>
            <Text style={style.subtotalText}>
                Subtotal
            </Text>
            <Text style={style.subtotalText}>
                { subtotal }
            </Text>
        </View>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default Subtotals
