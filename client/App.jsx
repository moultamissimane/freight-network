import React, {useEffect, useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CredentialsContext} from './components/CredentialsContext';
import { Text } from 'react-native'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import OnboardingScreen from './components/Onboarding';
import Auth from './navigations/Auth'
import Route from './navigations/Route';


const queryClient = new QueryClient();


function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState('');


  const checkLoginCredentials =  () => {
    AsyncStorage.getItem('token')
    // AsyncStorage.getItem('user')
    .then(result => {
      if (result !== null) {
        setStoredCredentials(JSON.parse(result));
      }
      else{
        setStoredCredentials(null);
      }
    })
    .catch(error => {
      console.log(error);
    })
  };

    useEffect(() =>{
      checkLoginCredentials();
      setAppReady(true);
    }, [])

  return (
    <CredentialsContext.Provider
      value={{
        storedCredentials,
        setStoredCredentials,
      }}
    >
      <QueryClientProvider client={queryClient}>
        {appReady && <Route />}
      </QueryClientProvider>
    </CredentialsContext.Provider>
  )
}

export default App