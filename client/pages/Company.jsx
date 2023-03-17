import {View, Text, FlatList, Image} from 'react-native';
import React, {useContext, useState, useEffect, useRef} from 'react';
import {CredentialsContext} from '../components/CredentialsContext';
import m from '../assets/img/splash.png';

const Company = ({navigation}) => {
  const {storedCredentials, setStoredCredentials} =
    useContext(CredentialsContext);
  const [companys, setCompanys] = useState('');

  useEffect(() => {
    async function fetchCompanys() {
      const appUrl = 'http://192.168.9.20:5000';
      const url = `${appUrl}/api/users/get`;

      const response = await fetch(url);
      const data = await response.json();
      setCompanys(data);
    }
    fetchCompanys();
  }, [companys]);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      {/* <Image source={m} style={{width: 100, height: 100}} /> */}
      <FlatList
        data={companys}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '',
              padding: 20,
              marginVertical: 8,
              marginHorizontal: 16,
              borderBottomLeftRadius: 70,
              borderTopLeftRadius: 70,
            }}>
            <Text
              style={{
                fontSize: 32,
              }}>
              Company Name : {item.companyName}
            </Text>
            <Text>Company Email : {item.email}</Text>
            <Text>Company Phone : {item.phone}</Text>
            <Text>Company Address : {item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Company;
