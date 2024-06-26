import { View, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import Input from "../widget/Input";
import { COLORS } from "../constants/Colors";
import Button from "../widget/Button";
import LogoText from "../widget/LogoText";
import FocusedStatusBar from "../constants/StatusBar";
import CustomCheckbox from "../widget/Checkbox";
import { useNavigation } from "@react-navigation/native";
import LoginPage2 from "./LoginPage2";

const SignupPage = () => {

  const navigation= useNavigation()

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
          <CustomCheckbox />

          <Text></Text>
        </View>

        <Button
          buttonColor={COLORS.light.black}
          textColor={COLORS.light.white}
          buttonText={"Sign In"}
          Onpress={()=> navigation.navigate("LoginPage2") }
        />
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
