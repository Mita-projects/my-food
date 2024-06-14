import { TextInput } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const Input = ({ backgroundColor }) => {
  return <TextInput style={[styles.input, { backgroundColor }]} />;
};

export default Input;
