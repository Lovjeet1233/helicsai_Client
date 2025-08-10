// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { getFirestore, doc, setDoc, collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { PhoneAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyChHsE3Lzy65NpKalno_wNvJP8d0U6vEvM",
//   authDomain: "helics-a8e7b.firebaseapp.com",
//   projectId: "helics-a8e7b",
//   storageBucket: "helics-a8e7b.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:abcdefghijk"
// };
const firebaseConfig = {
  apiKey: "AIzaSyChHsE3Lzy65NpKalno_wNvJP8d0U6vEvM",
  authDomain: "helics-a8e7b.firebaseapp.com",
  projectId: "helics-a8e7b",
  storageBucket: "helics-a8e7b.firebasestorage.app",
  messagingSenderId: "256015504711",
  appId: "1:256015504711:web:efedf3aab9c196c44a6862",
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const phoneProvider = new PhoneAuthProvider(auth);

// Auth functions
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const signInWithPhone = (phoneNumber, recaptchaVerifier) => {
  return PhoneAuthProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier);
};
export const logout = () => signOut(auth);

// Chat history functions
export const saveChatToFirestore = async (userId, chatData) => {
  try {
    const chatRef = doc(db, 'chats', `${userId}_${chatData.id}`);
    await setDoc(chatRef, {
      ...chatData,
      userId,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return true;
  } catch (error) {
    console.error('Error saving chat:', error);
    return false;
  }
};

export const getUserChats = async (userId) => {
  try {
    const chatsQuery = query(
      collection(db, 'chats'),
      where('userId', '==', userId),
      orderBy('updatedAt', 'desc')
    );
    const querySnapshot = await getDocs(chatsQuery);
    return querySnapshot.docs.map(doc => doc.data());
  } catch (error) {
    console.error('Error fetching chats:', error);
    return [];
  }
};