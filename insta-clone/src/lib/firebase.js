import Firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth'; 

//here import the seed file

const config = {}; 

const firebase = Firebase.initializeApp(config); 
const { FieldValue } = Firebase.firestore; 

//call seed file only ONCE
//seedDatabase(firebase); 

export default { firebase, FieldValue }; 