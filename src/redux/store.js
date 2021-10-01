//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { configureStore }   from '@reduxjs/toolkit'
import cartReducer          from './reducers/cartSlice'


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default configureStore({
    reducer: {
        cartReducer: cartReducer
    }
})
