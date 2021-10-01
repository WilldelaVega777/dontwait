//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from 'react'
import { useState }         from 'react'
import { useEffect }        from 'react'
import { View }             from 'react-native'
import { StyleSheet }       from 'react-native'

import { useDispatch }      from 'react-redux'

import { Divider }          from 'react-native-elements'
import BouncyCheckbox       from 'react-native-bouncy-checkbox'

import FoodInfo             from './FoodInfo'
import FoodImage            from './FoodImage'

import { addToCart }        from '../../redux/reducers/cartSlice'
import { removeFromCart }   from '../../redux/reducers/cartSlice'


//---------------------------------------------------------------------
// Styles Section
//---------------------------------------------------------------------
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    }
})


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const MenuItem = ({
    food,
    isChecked,
    hideCheckbox,
    marginLeft,
    restaurantName
}) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    let bouncyCheckboxRef = null
    const [checkboxState, setCheckboxState] = useState(false)
    const dispatch = useDispatch()

    //-----------------------------------------------------------------
    // Lifecycle Eventhandler Methods Section
    //-----------------------------------------------------------------
    useEffect(() => {
        setCheckboxState(isChecked)
    }, [checkboxState])


    //-----------------------------------------------------------------
    // Internal Functions Section
    //-----------------------------------------------------------------
    const selectItem = (food) => {
        console.log(checkboxState)
        setCheckboxState(!checkboxState)
        const actionType =
            (!checkboxState ? addToCart : removeFromCart)

        dispatch(actionType({
            restaurantName: restaurantName,
            item: {...food}
        }))
    }

    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <View
            style={{
                alignItems: 'center',
                alignContent: 'center'
            }}
        >
            <View
                style={styles.menuItemStyle}
            >
                { hideCheckbox ? (<></>) :
                    <BouncyCheckbox
                        ref={(ref) => (bouncyCheckboxRef = ref)}
                        isChecked={checkboxState}
                        onPress={() => {
                            selectItem(food)
                        }}
                        disableBuiltInState
                        iconStyle={{
                            borderColor: 'lightgray',
                            borderRadius: 0
                        }}
                        fillColor='green'
                    />
                }
                <FoodInfo
                    title={food.title}
                    description={food.description}
                    price={food.price}
                />
                <FoodImage
                    image={food.image}
                    marginLeft={marginLeft ? marginLeft : 0}
                />
            </View>
            <Divider
                width={0.5}
                color='#cdcdcd'
                style={{
                    marginVertical: 5,
                    width: '90%',
                }}
            />
        </View>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default MenuItem
