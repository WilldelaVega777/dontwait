//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import { useState }         from "react"
import { useEffect }        from "react"

import { SafeAreaView }     from "react-native"
import { View }             from "react-native"
import { ScrollView }       from "react-native"

import { YelpService }      from "../services/YelpService"

import HeaderTabs           from "../components/home/HeaderTabs"
import SearchBar            from "../components/home/SearchBar"
import Categories           from "../components/home/Categories"
import RestaurantItems      from "../components/home/RestaurantItem/RestaurantItems"


import localRestaurants     from "../data/localRestaurants"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const Home = ({navigation}) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const [activeTab, setActiveTab] = useState('Delivery')
    const [city, setCity] = useState('San Francisco')
    const [restaurantItems, setRestaurantItems] = useState(localRestaurants)
    const [category, setCategory] = useState('')

    let data


    //-----------------------------------------------------------------
    // Lifecycle Eventhandler Section
    //-----------------------------------------------------------------
     useEffect(() => {

        const updateRestaurants = async (city) => {
            const initialData = await YelpService.getRestaurantsFromYelp(city)
            const finalData = cleanData(initialData)
            setRestaurantItems(finalData)
        }

        updateRestaurants(city)

     }, [city])


     //-----------------------------------------------------------------
     const cleanData = (data) => {
        data.businesses.forEach((restaurant) => {
            if (
                (!restaurant.transactions) ||
                (restaurant.transactions.length === 0)
            )
            {
                restaurant.transactions = ['delivery']
            }
        })

        return data.businesses.filter(
            (restaurant) => restaurant.image_url
        )
     }


    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
         <SafeAreaView
            style={{
                backgroundColor: '#eee',
                flex: 1
            }}
        >
              <View
                    style={{
                        backgroundColor: 'white',
                        padding: 15
                    }}
              >
                <HeaderTabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                <SearchBar
                    cityHandler={setCity}
                />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Categories
                    selectedCategory={category}
                    selectCategory={setCategory}
                />
                <RestaurantItems
                    items={restaurantItems.filter((restaurant) =>
                        restaurant.transactions.includes(
                            activeTab.toLowerCase()
                        )
                    )}
                    navigation={navigation}
                />
            </ScrollView>

        </SafeAreaView>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default Home
