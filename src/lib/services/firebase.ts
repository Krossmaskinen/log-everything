import {
	apiKey,
	appId,
	authDomain,
	databaseURL,
	messagingSenderId,
	projectId,
	storageBucket
} from '$env/static/private';
import { getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = getFirebaseConfig();

let app: FirebaseApp;

if (!getApps().length) {
	app = initializeApp(firebaseConfig);
}

export function connect() {
	const db = getFirestore(app);

	return {
		db
	};
}

function getFirebaseConfig() {
	const config: FirebaseOptions = {
		apiKey,
		authDomain,
		databaseURL,
		projectId,
		storageBucket,
		messagingSenderId,
		appId
	};

	return config;
}
