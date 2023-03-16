// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CredentialsContext } from "./components/CredentialsContext";
import Routes from "./navigations/Route";

const queryClient = new QueryClient();

function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage.getItem("token");
    AsyncStorage.getItem("user")
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    checkLoginCredentials();
    setAppReady(true);
  }, []);

  return (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}>
      <QueryClientProvider client={queryClient}>
        {appReady && <Routes />}
      </QueryClientProvider>
    </CredentialsContext.Provider>
  );
}
