import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home";
import Profile from "../pages/Profile";


const PageStack = createNativeStackNavigator();

function Pages() {
    return (
        <PageStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <PageStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <PageStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: true
                }}
            />
        </PageStack.Navigator>
    )
}

export default Pages;