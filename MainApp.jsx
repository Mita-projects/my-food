import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignupPage from "./SignupPage";

const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignupPage" component={SignupPage} />
    </Stack.Navigator>
  );
};

export default MainApp;
