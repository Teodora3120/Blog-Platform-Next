// src/api/auth.ts
import { auth } from '@/db/firebaseConfig';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createUserWithEmailAndPassword } from '@/db/firebaseConfig'

export const LoginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const LogoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};


export const RegisterUser = async (email: string, password: string, name: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Additional user data can be stored in Firestore or Realtime Database
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

