import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";

const CustomCheckbox = () => {
  const [toggleCheckbox, setToggleCheckBox] = useState(false);

  return (
    <Checkbox
      disabled={false}
      value={toggleCheckbox}
      onValueChange={setToggleCheckBox}
      style={styles.checkBox}
      color={toggleCheckbox ? COLORS.light.success : undefined}
    />
  );
};

export default CustomCheckbox;
