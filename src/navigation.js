//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React                       from 'react'
import { useState }                     from "react"
import { useEffect }                    from "react"

import { Divider }                      from "react-native-elements/dist/divider/Divider"
import { createStackNavigator }         from '@react-navigation/stack'
import { NavigationContainer }          from '@react-navigation/native'
import { useNavigationContainerRef }    from '@react-navigation/native'

import {
    Provider as ReduxProvider
}                                       from 'react-redux'
import store                             from './redux/store'

import Home                              from './screens/Home'
import RestaurantDetail                  from './screens/RestaurantDetail'
import OrderCompleted                    from './screens/OrderCompleted'

import BottomTabs                        from "./components/BottomTabs"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const RootNavigation = (props) => {
    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const Stack = createStackNavigator()
    const screenOptions = {
        headerShown: false
    }

    const [currentPage, setCurrentPage] = useState('Home')
    const navigationRef = useNavigationContainerRef();
    let route

    useEffect(() => {
        const unsubscribe = navigationRef.addListener('state', (e) => {
            if (navigationRef.current)
            {
                route = navigationRef.getCurrentRoute().name
                setCurrentPage(route);
            }
        });
    }, [])


    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <ReduxProvider store={store}>
            <NavigationContainer
                ref={navigationRef}
            >
                <Stack.Navigator
                    screenOptions={screenOptions}
                    initialRouteName="Home"
                >
                    <Stack.Screen
                        name='Home'
                        component={Home}
                    />
                    <Stack.Screen
                        name='RestaurantDetail'
                        component={RestaurantDetail}
                    />
                    <Stack.Screen
                        name='OrderCompleted'
                        component={OrderCompleted}
                    />
                </Stack.Navigator>
            </NavigationContainer>
            <Divider width={1}/>
            {   ['Home', 'Browse', 'Grocery', 'Orders', 'Account']
                .includes(currentPage) && (
                <BottomTabs
                    selectedButton={currentPage}
                    selectButton={(page) => {
                        setCurrentPage(page)
                    }}
                />
            )}
       </ReduxProvider>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default RootNavigation
