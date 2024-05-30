import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAnZ-rq0ctTn02L-b-IOyKheQ5CGrxi5sw",
  authDomain: "ocean-style-d1724.firebaseapp.com",
  projectId: "ocean-style-d1724",
  storageBucket: "ocean-style-d1724.appspot.com",
  messagingSenderId: "1010149450123",
  appId: "1:1010149450123:web:980a80c781c43ff6e64f8e"
};


export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
