import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SigninPage from "./screens/SigninPage";
import SignupPage from "./screens/SignupPage";

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SigninPage" component={SigninPage} />
      <Stack.Screen name="SignupPage" component={SignupPage}/>
    </Stack.Navigator>
  );
};

export default MainApp;
