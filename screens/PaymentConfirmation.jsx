import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import FocusedStatusBar from "../constants/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../widget/Button";

const PaymentConfirmation = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [enable, setEnable] = useState(false);

  const handleEnabled = () => {
    setEnabled((prevState) => !prevState);
  };

  const handleisEnabled = () => {
    setIsEnabled((prevState) => !prevState);
  };

  const handleEnable = () => {
    setEnable((prevState) => !prevState);
  };

  const navigation = useNavigation();
  return (
    <ScrollView
      style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={"light-content"}
      />

      <View style={styles.container}>
        <View style={{ flexDirection: "row", paddingBottom: 20 }}>
          <AntDesign
            name="left"
            size={20}
            color="black"
            onPress={() => navigation.navigate("Cart")}
          />
          <Text style={{ paddingHorizontal: 20, color: "gray" }}>
            PAYMENT OPTIONS
          </Text>
        </View>

        <Text style={{ color: COLORS.light.primary }}>
          SELECT PAYMENT METHOD
        </Text>

        <Pressable onPress={handleEnabled}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto
              name={enabled ? "radio-btn-passive" : "radio-btn-active"}
              size={24}
              color={enabled ? COLORS.light.black : COLORS.light.primary}
            />
          </View>
          <Text>Quickteller</Text>

          <AntDesign name="down" size={24} color="black" />
        </Pressable>

        <View style={styles.line}></View>

        <Pressable style={styles.paymentCon} onPress={handleisEnabled}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto
              name={isEnabled ? "radio-btn-passive" : "radio-btn-active"}
              size={24}
              color={isEnabled ? COLORS.light.black : COLORS.light.primary}
            />

            <Text>Credit/Debit card</Text>
          </View>

          <AntDesign name="up" size={24} color="black" />
        </Pressable>

        <View>
          <Text>Card Holder</Text>
          <Text>PRINCEWILL CZAR</Text>
        </View>

        <View>
          <Text>Card Number</Text>
          <Text>0805 6500 6626 5838</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>CVC</Text>
            <Text>***</Text>
          </View>

          <View>
            <Text>Expiry Date</Text>
            <Text>DD/MM/YYYY</Text>
          </View>
        </View>

        <View style={styles.line}></View>

        <Pressable onPress={handleEnable}>
          <View style={{ flexDirection: "row" }}>
            <Fontisto
              name={enable ? "radio-btn-passive" : "radio-btn-active"}
              size={24}
              color={enable ? COLORS.light.black : COLORS.light.primary}
            />
          </View>
          <Text>Not Banking</Text>

          <AntDesign name="down" size={24} color="black" />
        </Pressable>

        <Button
          buttonColor={COLORS.light.primary}
          textColor={COLORS.light.white}
          buttonText={"SEND FOR CONFIRMATION"}
          onPress={() =>
            navigation.navigate("YelloLoader", { status: "failed" })
          }
        />
      </View>
    </ScrollView>
  );
};

export default PaymentConfirmation;
