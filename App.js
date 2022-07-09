import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
// import { store } from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";

import SelectLanguage from "./screens/SelectLanguage";
import Login from "./screens/Login";
import Login2OTP from "./screens/Login2OTP";
import OTPInput from "./screens/OTPInput";
import SetPin from "./screens/SetPin";
import SetPinVerify from "./screens/SetPinVerify";
import TouchIDSetUp from "./screens/TouchIDSetUp";
import LoginPinCode from "./screens/LoginPinCode";
import ForgotPassword from "./screens/ForgotPassword";
import ForgotPasswordConfirm from "./screens/ForgotPasswordConfirm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="SelectLanguage"
            component={SelectLanguage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ForgotPasswordConfirm"
            component={ForgotPasswordConfirm}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Login2OTP"
            component={Login2OTP}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OTPInput"
            component={OTPInput}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SetPin"
            component={SetPin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SetPinVerify"
            component={SetPinVerify}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="TouchIDSetup"
            component={TouchIDSetUp}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LoginPinCode"
            component={LoginPinCode}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>

    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
