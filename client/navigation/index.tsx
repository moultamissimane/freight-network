/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
// @ts-ignore
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// @ts-ignore
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Welcome from "../screens/Welcome";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/* @ts-ignore */}
      <Stack.Screen
        name="Welcome" // Add a new screen
        component={Welcome} // Define the component to be rendered
        options={{ headerShown: false }}
      />
      {/* @ts-ignore */}
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      {/* @ts-ignore */}
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      {/* @ts-ignore */}
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      {/* @ts-ignore */}
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        {/* @ts-ignore */}
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
// const BottomTab = createBottomTabNavigator<RootTabParamList>();

// function BottomTabNavigator() {
//   const colorScheme = useColorScheme();

//   return (
//     <BottomTab.Navigator
//       initialRouteName="Login"
//       // screenOptions={{
//       //   tabBarActiveTintColor: Colors[colorScheme].tint,
//       // }}
//     >
//       <BottomTab.Screen
//         name="Login"
//         component={Login}
//         // options={({ navigation }: RootTabScreenProps<"Login">) => ({
//         //   title: "Login",
//         //   // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         //   // headerRight: () => (
//         //   //   <Pressable
//         //   //     onPress={() => navigation.navigate("Modal")}
//         //   //     style={({ pressed }) => ({
//         //   //       opacity: pressed ? 0.5 : 1,
//         //   //     })}
//         //   //   >
//         //   //     <FontAwesome
//         //   //       name="info-circle"
//         //   //       size={25}
//         //   //       color={Colors[colorScheme].text}
//         //   //       style={{ marginRight: 15 }}
//         //   //     />
//         //   //   </Pressable>
//         //   // ),
//         // })}
//       />
//       {/* <BottomTab.Screen
//         name="Signup"
//         component={Signup}
//         options={{
//           title: "Signup",
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       /> */}
//     </BottomTab.Navigator>
//   );
// }

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>["name"];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }
