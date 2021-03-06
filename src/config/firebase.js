//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import firebase from 'firebase'
import { firebaseConfig } from '../secrets/keys'


//---------------------------------------------------------------------
// DB Startup Section
//---------------------------------------------------------------------
(!firebase.apps.length) ?
    firebase.initializeApp(firebaseConfig) :
    firebase.app()


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default firebase
