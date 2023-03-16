import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Landing from "../pages/Landing";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/MaterialIcons';


const Tab = createMaterialBottomTabNavigator();
const PageStack = createNativeStackNavigator();

function Pages() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#000' }}
            screenOptions=
            {({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            :
                            'home';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'manage_accounts' : 'manage_accounts';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 40 }
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: true
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: true
                }}
            />
           
        </Tab.Navigator>
    )
}

export default Pages;