import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDGfO0aHyPbZjmmew5PIlrXwQH585Pbkk8",
    authDomain: "goalcoach-a6e75.firebaseapp.com",
    databaseURL: "https://goalcoach-a6e75.firebaseio.com",
    projectId: "goalcoach-a6e75",
    storageBucket: "",
    messagingSenderId: "544990656850"
};

export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');

export const completeGoalRef = firebase.database().ref('completeGoals');