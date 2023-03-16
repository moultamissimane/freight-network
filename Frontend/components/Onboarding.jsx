import { Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";



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
            color: "#fff",
            fontWeight: "600",
        }}
    >
        GO
    </Text>
  </TouchableOpacity>

);

const OnboardingScreen = ({ navigation }) => { 
    return (
        <Onboarding
            DoneButtonComponent={Done}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: "#fff",
                    image: <Image source={require("../assets/img/splash.png")} />,
                    title: "Connect to the world",
                    subtitle: "A New Way To Connect With The World",
                }
            ]}
        />
    )
}

export default OnboardingScreen;



// import React from 'react';
// import { TouchableOpacity, Text, Image } from 'react-native';
// import Onboarding, { OnboardingProps } from 'react-native-onboarding-swiper';

// interface DoneProps {
//   onPress: () => void;
// }

// const Done: React.FC<DoneProps> = ({ onPress }) => (
//   <TouchableOpacity
//     style={{
//       marginHorizontal: 10,
//     }}
//     onPress={onPress}
//   >
//     <Text
//         style={{
//             fontSize: 16,
//             color: "#fff",
//             fontWeight: "600",
//         }}
//     >
//         GO
//     </Text>
//   </TouchableOpacity>
// );

// interface OnboardingScreenProps {
//   navigation: any;
// }

// const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => { 
//     const handleDone = () => {
//         navigation.navigate("Login");
//     }

//     const pages: OnboardingProps["pages"] = [
//         {
//             backgroundColor: "#fff",
//             image: <Image source={require("../assets/img/splash.png")} />,
//             title: "Connect to the world",
//             subtitle: "A New Way To Connect With The World",
//         }
//     ];

//     return (
//         <Onboarding
//             DoneButtonComponent={() => <Done onPress={handleDone} />}
//             onDone={handleDone}
//             pages={pages}
//         />
//     );
// };

// export default OnboardingScreen;
