import { TextInput } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const Input = ({ backgroundColor, borderColor }) => {
  return <TextInput style={[styles.input, { backgroundColor, borderColor }]} />;
};

export default Input;
