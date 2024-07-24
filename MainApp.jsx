import React from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SigninPage from "./screens/SigninPage";
import SignupPage from "./screens/SignupPage";
import Home from "./screens/Home";
import YelloLoader from "./screens/YelloLoader";
import ErrorRed from "./screens/ErrorRed";
import Success from "./screens/Success";
import Favorite from "./screens/Favorite";
import Sidebar from "./screens/Sidebar";
import LoginPage from "./screens/LoginPage";
import Details from "./screens/Details";
import Cart from "./screens/Cart";
import Checkout from "./screens/Checkout";
import Profile from "./screens/Profile";
import PaymentConfirmation from "./screens/PaymentConfirmation";



const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="SigninPage" component={SigninPage} />
      <Stack.Screen name="SignupPage" component={SignupPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="YelloLoader" component={YelloLoader} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="ErrorRed" component={ErrorRed} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen
        name="Sidebar"
        component={Sidebar}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="PaymentConfirmation"
        component={PaymentConfirmation}
      />
    </Stack.Navigator>
  );
};

export default MainApp;
