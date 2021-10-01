//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React                   from "react"
import { View }                     from "react-native"
import { Text }                     from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"

import Ionicons                     from "react-native-vector-icons/Ionicons"
import AntDesign                    from "react-native-vector-icons/AntDesign"

import { placesKey }                from '../../secrets/keys'


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const SearchBar = (props) => {

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <View
            style={{
                marginTop: 15,
                marginLeft: 10,
                flexDirection: 'row',
            }}
        >
            <GooglePlacesAutocomplete
                placeholder="Search"
                query={{key: placesKey}}
                onPress={(data, details) => {
                    const city = data.description.split(',')[0]
                    props.cityHandler(city)
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#eee',
                        borderRadius: 20,
                        fontWeight: '700',
                        marginTop: 7
                    },
                    textInputContainer: {
                        backgroundColor: '#eee',
                        borderRadius: 50,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 10,
                        paddingLeft: 10
                    }
                }}
                renderLeftButton={() => (
                    <View>
                        <Ionicons
                            name='location-sharp'
                            size={24}
                        />
                    </View>
                )}
                renderRightButton={() => (
                    <View
                        style={{
                            flexDirection: 'row',
                            marginRight: 8,
                            backgroundColor: 'white',
                            padding: 9,
                            borderRadius: 30,
                            alignItems: 'center'
                        }}
                    >
                        <AntDesign
                            name='clockcircle'
                            size={11}
                            style={{
                                marginRight: 6
                            }}
                        />
                        <Text>
                            Search
                        </Text>
                    </View>
                )}
            />
        </View>
    )

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default SearchBar
