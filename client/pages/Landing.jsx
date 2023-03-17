import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from 'react-native';
import React, { useContext } from 'react';
import m from '../assets/img/landing.jpg';
import Container from '../assets/img/Container.png';
import { CredentialsContext } from '../components/CredentialsContext';

export default function Landing({ navigation }) {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  console.log(storedCredentials);
  return (
    <ImageBackground
      source={Container}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',

      }}>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Pages', { screen: 'Home' })}
            style={{
              backgroundColor: '#54b6ff',
              borderRadius: 10,
              marginTop: 20,
              marginRight: 10,
              width: 75,
              alignItems: 'center',
              shadowColor: 'white',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '600',
                padding: 5,
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 5,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 40,
              color: '#fff',
              fontWeight: 'bold',
              marginTop: 300,

            }}>
            Welcome to MFN
          </Text>
        </View>
        {storedCredentials ? (
          <View style={{ flex: 1 }} />
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
              style={{
                backgroundColor: '#54b6ff',
                borderColor: '#54b6ff',
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                width: 160,
                alignItems: 'center',
                shadowColor: '#C4D1D5',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
              }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Auth', { screen: 'Register' })}
              style={{
                backgroundColor: '#54b6ff',
                borderColor: '#54b6ff',
                borderWidth: 1,
                padding: 10,
                borderRadius: 10,
                marginTop: 10,
                width: 160,
                alignItems: 'center',
                shadowColor: '#C4D1D5',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,
              }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
