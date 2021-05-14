import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAjpFWydxwgWbuJnpmJ0-wnqJUYsH1cRDQ',
  authDomain: 'practical-test-7a036.firebaseapp.com',
  projectId: 'practical-test-7a036',
  storageBucket: 'practical-test-7a036.appspot.com',
  messagingSenderId: '743855568917',
  appId: '1:743855568917:web:a708d5d09d533d2c6ff61c',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
