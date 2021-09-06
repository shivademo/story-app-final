import firebase from 'firebase'

export const firebaseConfig = {
    apiKey: "AIzaSyDMP38NOoHJvEasqB9hIMv71cNNEFlmRIU",
    authDomain: "story-telling-app-e9759.firebaseapp.com",
    databaseURL: "https://story-telling-app-e9759-default-rtdb.firebaseio.com",
    projectId: "story-telling-app-e9759",
    storageBucket: "story-telling-app-e9759.appspot.com",
    messagingSenderId: "860966482297",
    appId: "1:860966482297:web:086e910fb1503bf461bfa8"

}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}
