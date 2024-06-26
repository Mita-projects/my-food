import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignupPage from "./screens/SignupPage";
import LoginPage2 from "./screens/LoginPage2";

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignupPage" component={SignupPage} /> 
      <Stack.Screen name = "LoginPage2" component={LoginPage2}/>
    </Stack.Navigator>
  );
};

export default MainApp;
