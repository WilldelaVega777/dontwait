//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React       from "react"
import { View }         from "react-native"
import HeaderButton     from "./HeaderButton"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const HeaderTabs = (props) => {

   //-----------------------------------------------------------------
   // Render Section
   //-----------------------------------------------------------------
    return (
         <View
            style={{
                flexDirection: 'row',
                alignSelf: 'center'
            }}
        >
            <HeaderButton
                text="Delivery"
                btnColor={(props.activeTab === 'Delivery') ? 'black' : 'white'}
                textColor={(props.activeTab === 'Delivery') ? 'white' : 'black'}
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
            <HeaderButton
                text="Pickup"
                btnColor={(props.activeTab === 'Delivery') ? 'white' : 'black'}
                textColor={(props.activeTab === 'Delivery') ? 'black' : 'white'}
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </View>

    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default HeaderTabs
