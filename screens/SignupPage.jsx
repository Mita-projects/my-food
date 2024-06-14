import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import Input from "../widget/Input";
import { COLORS } from "../constants/Colors";
import Button from "../widget/Button";
import LogoText from "../widget/LogoText";
import FocusedStatusBar from "../constants/StatusBar";
import Checkbox from "../widget/Checkbox";

const SignupPage = () => {
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.primary }]}
    >
      <FocusedStatusBar />

      <View style={styles.container}>
        <LogoText />

        <Text style={styles.emailText}>Email</Text>

        <Input backgroundColor={COLORS.light.white} />

        <Text style={styles.emailText}>Password</Text>

        <Input />

        <View>
          <Checkbox />

          <Text></Text>
        </View>

        <Button
          buttonColor={COLORS.light.black}
          textColor={COLORS.light.white}
          buttonText={"Sign In"}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
