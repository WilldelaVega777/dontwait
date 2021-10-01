//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import firebase         from '../config/firebase'


//---------------------------------------------------------------------
// Service Definition Section
//---------------------------------------------------------------------
class CartService
{
    static async saveCart(cart)
    {
        const db = firebase.firestore()
        await db.collection('orders').add({
            items: cart.items,
            restaurantName: cart.restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        return
    }
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default CartService
