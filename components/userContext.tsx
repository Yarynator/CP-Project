import { initializeApp } from 'firebase/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
} from 'firebase/auth';
import React, { useContext, useEffect, useState } from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyB9Z_yYUhm8ayl5D_K8UlNdGkVjcIY4ZjA',
  authDomain: 'scoutreservator.firebaseapp.com',
  projectId: 'scoutreservator',
  storageBucket: 'scoutreservator.appspot.com',
  messagingSenderId: '260050979498',
  appId: '1:260050979498:web:f33e8ad86aab9e33565ed3',
  measurementId: 'G-NMZDXJXQ0F',
};
export type User = {
  user: FirebaseUser;
  data: any;
};

export type UserContextProps = {
  user?: User;
  loading: boolean;
  logout: () => Promise<void>;
  login: (username: string, password: string) => Promise<FirebaseUser>;
  createUser: (username: string, password: string) => Promise<FirebaseUser>;
  userExists?: (username: string) => Promise<boolean>;
  deleteUser?: (password: string) => Promise<void>;
};
let auth: Auth;
// @ts-ignore
const UserContext = React.createContext<UserContextProps>();
const login = async (username: string, password: string) => {
  const cred = await signInWithEmailAndPassword(auth, username, password);
  return cred?.user;
};
const logout = async () => {
  return signOut(auth);
};
const createUser = async (username: string, password: string) => {
  const cred = await createUserWithEmailAndPassword(auth, username, password);
  return cred?.user;
};
const deleteUser = async (password: string) => {
  const email = auth?.currentUser?.email;
  if (!email) {
    throw new Error('Action has failed');
  }
  await signInWithEmailAndPassword(auth, email, password);
  await auth!.currentUser?.delete();
};
const userExists = async (email: string) => {
  try {
    const signInMethods = await fetchSignInMethodsForEmail(auth, email);
    return signInMethods.length > 0;
  } catch (error: any) {
    if (error?.code !== 'auth/invalid-email') {
      throw error;
    }
    return false;
  }
};

const initializeFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Initialize Firebase Authentication and get a reference to the service
  auth = getAuth(app);
};
const defaultState: Pick<UserContextProps, 'user' | 'loading'> = {
  loading: true,
};
const createFullUser = (user: FirebaseUser): User => {
  // todo: take or fetch proper data
  return {
    user,
    data: {
      /* any data */
    },
  };
};

export const UserContextProvider: React.FC = ({ children }) => {
  const [{ loading, user }, setUser] = useState(defaultState);
  useEffect(() => {
    initializeFirebase();
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser({
        loading: false,
        user: u ? createFullUser(u) : undefined,
      });
      // @ts-ignore - for dev purposes
      window.myLogout = user
        ? () => logout().then(() => console.log('User has logout.'))
        : () => console.log('No one was here..');
    });
    return () => unsubscribe();
  }, []);

  const hasUser = !loading && !!user;
  return (
    <UserContext.Provider
      value={{
        user,
        logout,
        login,
        createUser,
        userExists: hasUser ? undefined : userExists,
        deleteUser: hasUser ? deleteUser : undefined,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => {
  // during SSR rendering, when componenet is probed in getDataFromTree() useContext may return null;
  return useContext(UserContext) ?? (defaultState as UserContextProps);
};
