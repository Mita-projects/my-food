import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import FocusedStatusBar from "../constants/StatusBar";
import LogoText from "../widget/LogoText";
import Button from "../widget/Button";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.primary }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.primary}
        barStyle={"light-content"}
      />

      <View style={styles.container}>
        <View style={styles.logoCon}>
          <LogoText />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Button
            buttonColor={COLORS.light.black}
            textColor={COLORS.light.white}
            buttonText={"Sign In"}
            onPress={() => navigation.navigate("SigninPage")}
          />
        </View>
        
        <View style={{ paddingVertical: 10 }}>
          <Button
            buttonColor={COLORS.light.white}
            textColor={COLORS.light.black}
            buttonText={"Create new account"}
            onPress={() => navigation.navigate("SignupPage")}
            style={{ paddingVertical: 20 }}
          />
        </View>

        <Pressable
          onPress={() => navigation.navigate("Details")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 15,
          }}
        >
          <Text>Continue without Login</Text>
        </Pressable>

        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginLeft: -20 }}>
            <Image source={require("../assets/images/tomatoesbowl.png")} />
          </View>
          <View style={{ flex: 1, marginRight: -20, marginTop: 116 }}>
            <Image source={require("../assets/images/jollofbowl.png")} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
