import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import FocusedStatusBar from "../constants/StatusBar";

const Sidebar = () => {
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.primary }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.primary}
        barStyle={"light-content"}
      />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", marginVertical: 10, }}>
          <View style={styles.sidepicCon}>
            <Image
              source={require("../assets/images/profilepicture.png")}
              style={styles.imageMain}
              resizeMethod="contain"
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={styles.mediumText}>Princewill Czar</Text>
            <Text style={styles.smallText}>User Customer</Text>
          </View>
        </View>

        <View style={styles.draw}></View>
      </View>
    </SafeAreaView>
  );
};

export default Sidebar;
