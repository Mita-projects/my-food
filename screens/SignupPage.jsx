import {
  View,
  Text,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import Input from "../widget/Input";
import { COLORS } from "../constants/Colors";
import Button from "../widget/Button";
import LogoText from "../widget/LogoText";
import FocusedStatusBar from "../constants/StatusBar";
import CustomCheckbox from "../widget/Checkbox";
import { useNavigation } from "@react-navigation/native";

const SignupPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.primary }]}
    >
      <FocusedStatusBar />

      <View style={styles.container}>
        <View style={styles.logoCon}>
          <LogoText />
        </View>

        <View style={styles.regCon}>
          <Text style={styles.mediumText}>Email</Text>
          <View style={{ textColor: "black" }}>
            <Input backgroundColor={COLORS.light.white} />
          </View>
        </View>
        <View style={styles.regCon}>
          <Text style={styles.mediumText}>Password</Text>

          <Input backgroundColor={COLORS.light.white} />
        </View>

        <View style={styles.passwordCon}>
          <View style={{flexDirection: "row"}}>
            <CustomCheckbox />
            <Text style={{paddingHorizontal: 5, color: "white"}}>Remember me</Text>
          </View>
          <Text>Forgot Password?</Text>
        </View>

        <View style={{ paddingBottom: 30 }}>
          <Button
            buttonColor={COLORS.light.black}
            textColor={COLORS.light.white}
            buttonText={"Sign In"}
          />
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
          <View>
            <Text style={{ width: 50, textAlign: "center" }}>or</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        </View>

        <View
          style={{
            paddingVertical: 30,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/google.png")}
            style={{
              height: 23,
              width: 23,
              position: "absolute",
              zIndex: 1,
              left: 30,
            }}
            resizeMode="cover"
          />

          <Button
            buttonColor={COLORS.light.white}
            textColor={COLORS.light.black}
            buttonText={"Sign in with Google"}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/facebook.png")}
            style={{
              height: 23,
              width: 23,
              position: "absolute",
              zIndex: 1,
              left: 30,
            }}
            resizeMode="cover"
          />

          <Button
            buttonColor={COLORS.light.white}
            textColor={COLORS.light.black}
            buttonText={"Sign in with Facebook"}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <Text style={{ color: "white" }}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("")}>
            <Text style={{ color: "black" }}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;
