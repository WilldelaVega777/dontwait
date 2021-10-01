//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import { View }             from "react-native"
import IconButton           from "./IconButton"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const BottomTabs = (props) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
         <View style={{
             flexDirection: 'row',
             margin: 10,
             marginHorizontal: 30,
             justifyContent: 'space-between'
        }}>
            <IconButton
                icon='home'
                text='Home'
                selected={props.selectedButton}
                select={props.selectButton}
            />
            <IconButton
                icon='search'
                text='Browse'
                selected={props.selectedButton}
                select={props.selectButton}
            />
            <IconButton
                icon='shopping-bag'
                text='Grocery'
                selected={props.selectedButton}
                select={props.selectButton}
            />
            <IconButton
                icon='receipt'
                text='Orders'
                selected={props.selectedButton}
                select={props.selectButton}
            />
            <IconButton
                icon='user'
                text='Account'
                selected={props.selectedButton}
                select={props.selectButton}
            />
        </View>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default BottomTabs
