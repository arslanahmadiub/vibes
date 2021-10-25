import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import config from "../config/config";

firebase.initializeApp(config);

const auth = getAuth();

auth.languageCode = "eng";

const db = getFirestore();

export { auth, db };
export default firebase;
