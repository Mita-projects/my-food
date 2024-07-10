import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SigninPage from "./screens/SigninPage";
import SignupPage from "./screens/SignupPage";
import Home from "./screens/Home";
import YelloLoader from "./screens/YelloLoader";
import ErrorRed from "./screens/ErrorRed";
import Success from "./screens/Success";
import Favorite from "./screens/Favorite";


const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SigninPage" component={SigninPage} />
      <Stack.Screen name="SignupPage" component={SignupPage}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="YelloLoader" component={YelloLoader}/>
      <Stack.Screen name="Success" component={Success}/>
      <Stack.Screen name="ErrorRed" component={ErrorRed}/>
      <Stack.Screen name="Favorite" component={Favorite}/>
      
    </Stack.Navigator>
  );
};

export default MainApp;