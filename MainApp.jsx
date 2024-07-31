import React from "react";
import AuthNavigation from "./navigation/AuthNavigation";
import { useSelector } from "react-redux";
import StackNavigation from "./navigation/StackNavigation";

const MainApp = () => {
  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser);

  if (!currentUser) {
    return <AuthNavigation />;
  }

  return <StackNavigation />;
};

export default MainApp;
