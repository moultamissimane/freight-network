import React, { useContext, useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { CredentialsContext } from '../components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function Profile() {
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const navigation = useNavigation();
  const [isTokenStored, setIsTokenStored] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then((value) => {
        setIsTokenStored(value !== null);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogout = () => {
    AsyncStorage.removeItem('token')
      .then(() => {
        setStoredCredentials(null);
        navigation.navigate('Auth');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {storedCredentials && <Text>Welcome, {storedCredentials.founder}!</Text>}
      {isTokenStored ? (
        <Button title="Logout" onPress={handleLogout} />
      ) : (
        <Button title="Login" onPress={() => navigation.navigate('Auth')} />
      )}
    </View>
  );
}

export default Profile;
