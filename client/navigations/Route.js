import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { CredentialsContext } from "../components/CredentialsContext";
import Auth from "./Auth";
import Pages from "./Pages";
// import OnboardingScreen from "../components/Onboarding";
import Landing from "../pages/Landing";
import Home from "../pages/Home";


const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <CredentialsContext.Consumer>
            {({ storedCredentials }) => (
                <NavigationContainer>
                    <StatusBar barStyle="dark-content" />
                    <Stack.Navigator
                        screenOptions={{ headerShown: false }}>
                        {storedCredentials ? (
                            <Stack.Screen
                                name="Pages"
                                component={Pages}
                            />
                        ) : (
                            <>
                                <Stack.Screen
                                    name="Landing"
                                    component={Landing}
                                />
                                <Stack.Screen
                                    name="Auth"
                                    component={Auth}
                                    options={{
                                        headerShown: false
                                    }}
                                />
                                {!storedCredentials && (


                                    <Stack.Screen
                                        name="Pages"
                                        component={Pages}
                                    />
                                )}
                            </>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </CredentialsContext.Consumer>
    )
}

export default Routes;
//                         <Stack.Screen
//                             name="Landing"
//                             component={Landing}
//                             options={{
//                                 headerShown: false
//                             }}
//                         />
//                         <Stack.Screen
//                             name="Auth"
//                             component={Auth}
//                             options={{
//                                 headerShown: false
//                             }}
//                         />
//                         <Stack.Screen
//                             name="Pages"
//                             component={Pages}
//                             options={{
//                                 headerShown: false
//                             }}
//                         />
//                     </Stack.Navigator>
//                 </NavigationContainer>
//             )}
//         </CredentialsContext.Consumer>

//     )
// }

// export default Routes;