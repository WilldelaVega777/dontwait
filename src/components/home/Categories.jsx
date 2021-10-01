//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import * as React           from "react"
import { View }             from "react-native"
import { ScrollView }       from "react-native"
import CategoriesButton     from "./CategoryButton"
import categoryItems        from "../../data/categoryItems"


//---------------------------------------------------------------------
// Component Section
//---------------------------------------------------------------------
const Categories = (props) => {
    //-----------------------------------------------------------------
    // Render Section
    //-----------------------------------------------------------------
    return (
        <View
            style={{
                marginTop: 0,
                backgroundColor: 'white',
                paddingVertical: 5,
                paddingLeft: 20
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                { categoryItems.map((item, index) => (
                    <CategoriesButton
                        key={index}
                        image={item.image}
                        text={item.text}
                        keywords={item.keywords}
                        selectedCategory={props.selectedCategory}
                        selectCategory={props.selectCategory}
                    />
                ))}
            </ScrollView>
        </View>
    )
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default Categories
