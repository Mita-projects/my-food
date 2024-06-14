import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const Checkbox = () => {
  const [toggleCheckbox, setToggleCheckBox] = useState(false);

  return (
    <Checkbox
      disabled={false}
      value={toggleCheckbox}
      onvalueChange={(newValue) => setToggleCheckBox(newValue)}
    />
  );
};

export default Checkbox;
