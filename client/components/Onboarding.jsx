import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { NavigationAction, useNavigation } from "@react-navigation/native";





const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 10,
    }}
    {...props}
  >
    <Text
        style={{
            fontSize: 16,
            color: "#000",
            fontWeight: "600",
        }}
    >
        Login
    </Text>
  </TouchableOpacity> 
  
);
const Skip = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 10,
    }}
    {...props}
  >
    <Text
        style={{
            fontSize: 16,
            color: "#000",
            fontWeight: "600",
        }}
    >
        Skip
    </Text>
  </TouchableOpacity> 
);


const OnboardingScreen = ({ navigation }) => { 
    return (
        // <Onboarding
        //     DoneButtonComponent={Done}
        //     SkipButtonComponent={Skip}
        //     onSkip={() => navigation.replace("Pages")}
        //     onDone={() => navigation.navigate("Auth")}
        //     pages={[
        //         {
        //             backgroundColor: "#fff",
        //             image: <Image source={require("../assets/img/splash.png")} 
        //             style={{width: 300, height: 300}}
        //             />,
        //             title: "Connect to the world",
        //             subtitle: "A New Way To Connect With The World",
        //         },
                
             
        //     ]}
        // />
        <Onboarding
        onSkip={() => navigation.replace("Pages")}
        onDone={() => navigation.navigate("Auth")}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../assets/img/splash.png')} 
            style={{width: 300, height: 300}}
            />,
            title: 'Connect to the world',
            subtitle: 'A New Way To Connect With The World',
          }
        ]}
        />
    )
}

export default OnboardingScreen;