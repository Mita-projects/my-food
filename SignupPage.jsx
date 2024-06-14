import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";

const SignupPage = () => {
  const [toggleCheckbox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={styles.signUpCon}>
      <View>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
        <View style={styles.myfoodsCon}>
          <Image source={require("./assets/images/myfoods.png")} />
        </View>

        <Text style={styles.emailText}>Email</Text>

        <View style={styles.emailCon}></View>

        <Text style={styles.emailText}>Password</Text>

        <View style={styles.emailCon}></View>

        <View>
          <Checkbox
            disabled={false}
            value={toggleCheckbox}
            onvalueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  signUpCon: {
    // justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(255, 165, 0, 1);",
  },

  myfoodsCon: {
    paddingTop: 120,
    paddingLeft: 110,
    paddingBottom: 50,
  },

  emailText: {
    fontFamily: "Outfit",
    paddingLeft: 30,
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },

  emailCon: {
    marginVertical: 5,
    marginHorizontal: 20,
    width: 325,
    height: 47,
    borderRadius: 8,
    backgroundColor: "white",
  },

  checkBox: {
    height: 14,
    width: 14,
    marginLeft: 25,
    backgroundColor: "white",
    borderRadius: 1,
  },
});
