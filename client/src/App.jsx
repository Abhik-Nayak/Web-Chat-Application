import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import Messenger from './components/Messenger';
import AccountProvider from './components/context/AccountProvider';


const App = () => {
  const clientId = '589574726428-3rjpjjmgl7tq1e3vm81hs36dds77vekn.apps.googleusercontent.com'
  return (
    <>
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
    </>
  )
}

export default App