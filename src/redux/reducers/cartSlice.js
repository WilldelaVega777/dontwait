//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { createSlice }          from '@reduxjs/toolkit'


//---------------------------------------------------------------------
// Define Slice Section
//---------------------------------------------------------------------
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        selectedItems: {
            restaurantName: '',
            items: []
        }
    },
    reducers: {
        addToCart: (state, action) => {
            state.selectedItems = {
                restaurantName: action.payload.restaurantName,
                items: [
                    ...(state.selectedItems.items),
                    action.payload.item
                ]
            }
        },
        removeFromCart: (state, action) => {
            state.selectedItems = {
                restaurantName: action.payload.restaurantName,
                items: state.selectedItems.items.filter((item) =>
                    (item.title !== action.payload.item.title)
                )
            }
        },
        cleanCart: (state) => {
            state.selectedItems = {
                    restaurantName: '',
                    items: []
            }
        }
    }
})


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export const { addToCart }      = cartSlice.actions
export const { removeFromCart } = cartSlice.actions
export const { cleanCart }      = cartSlice.actions

export default cartSlice.reducer
