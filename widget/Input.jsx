import { TextInput } from "react-native";
import React from "react";
import { styles } from "../constants/styles";

const Input = ({ backgroundColor, borderColor, borderWidth, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[styles.input, { backgroundColor, borderColor, borderWidth }]}
    />
  );
};

export default Input;
