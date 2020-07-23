import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const Config = {

    apiKey: "AIzaSyBopzdVUI0Nj5p4MBO8xUBwdWS-4BpEN-E",
    authDomain: "online-diary-app-5484e.firebaseapp.com",
    databaseURL: "https://online-diary-app-5484e.firebaseio.com",
    projectId: "online-diary-app-5484e",
    storageBucket: "online-diary-app-5484e.appspot.com",
    messagingSenderId: "664842823898",
    appId: "1:664842823898:web:611fac2c3160b2c8549de3",
    measurementId: "G-ZEY7X815JM"
};



firebase.initializeApp(Config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


/*
export const generateUserDocument = async(user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, username, password } = user;
        try {
            await userRef.set({
                username,
                email,
                password,
                ...additionalData

            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};

const getUserDocument = async uid => {
    if (!uid) return null;

    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};

/*  

 apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
    
    */