import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD_4nBmuE7jc7CugrgTX9JIiLuxEk8eG5Q",
    authDomain: "ferg-world.firebaseapp.com",
    databaseURL: "https://ferg-world.firebaseio.com",
    projectId: "ferg-world",
    storageBucket: "ferg-world.appspot.com",
    messagingSenderId: "60535729625",
    appId: "1:60535729625:web:9a628f91c3c124e377fdc8",
    measurementId: "G-VWBDYQP2KC"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch {
			console.log('error creating user');
		}
	}

	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;