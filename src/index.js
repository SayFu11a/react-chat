import React, { createContext } from 'react';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { createRoot } from 'react-dom/client';

firebase.initializeApp({
   apiKey: 'AIzaSyDwiLPY9tlsXjEeLhPE9cwToXjqv_uomNY',
   authDomain: 'chat-react-4e94d.firebaseapp.com',
   projectId: 'chat-react-4e94d',
   storageBucket: 'chat-react-4e94d.appspot.com',
   messagingSenderId: '141915740390',
   appId: '1:141915740390:web:87dbd7ad2b11cb7064c327',
   measurementId: 'G-HFE4MPPKLV',
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
   <Context.Provider
      value={{
         firebase,
         auth,
         firestore,
      }}>
      <App />
   </Context.Provider>,
);
