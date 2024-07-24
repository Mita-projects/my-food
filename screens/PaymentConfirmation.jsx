import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import FocusedStatusBar from "../constants/StatusBar";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import Button from "../widget/Button";

const PaymentConfirmation = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);

  const handleEnabled = (value) => {
    switch (value) {
      case 1:
        setIsEnabled1(true);
        setIsEnabled2(false);
        setIsEnabled3(false);
        break;

      case 2:
        setIsEnabled1(false);
        setIsEnabled2(true);
        setIsEnabled3(false);
        break;

      case 3:
        setIsEnabled1(false);
        setIsEnabled2(false);
        setIsEnabled3(true);
        break;

      default:
        break;
    }
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

        <Pressable
          onPress={() => handleEnabled(1)}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Fontisto
              name={isEnabled1 ? "radio-btn-passive" : "radio-btn-active"}
              size={20}
              color={isEnabled1 ? COLORS.light.black : COLORS.light.primary}
            />
            <Text style={{ paddingHorizontal: 15 }}>Quickteller</Text>
          </View>

          <AntDesign name="down" size={20} color="black" />
        </Pressable>

        <View style={styles.line}></View>

        <Pressable style={styles.paymentCon} onPress={() => handleEnabled(2)}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingVertical: 5,
            }}
          >
            <Fontisto
              name={isEnabled2 ? "radio-btn-passive" : "radio-btn-active"}
              size={24}
              color={isEnabled2 ? COLORS.light.black : COLORS.light.primary}
            />

            <Text style={{ paddingHorizontal: 15 }}>Credit/Debit card</Text>
          </View>

          <AntDesign name="up" size={20} color="black" />
        </Pressable>

        <View style={styles.payConText}>
          <Text style={{ paddingVertical: 5 }}>Card Holder</Text>
          <Text style={{ paddingVertical: 5 }}>PRINCEWILL CZAR</Text>
        </View>

        <View style={styles.payConText}>
          <Text style={{ paddingVertical: 5 }}>Card Number</Text>
          <Text style={{ paddingVertical: 5 }}>0805 6500 6626 5838</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={[styles.payConText, { width: 170 }]}>
            <Text>Expiry Date</Text>
            <Text>DD/MM/YYYY</Text>
          </View>

          <View style={[styles.payConText, { width: 120 }]}>
            <Text>CVC</Text>
            <Text>***</Text>
          </View>
        </View>

        <View style={styles.line}></View>

        <Pressable
          onPress={() => handleEnabled(3)}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Fontisto
              name={isEnabled3 ? "radio-btn-passive" : "radio-btn-active"}
              size={24}
              color={isEnabled3 ? COLORS.light.black : COLORS.light.primary}
            />
            <Text style={{ paddingHorizontal: 10 }}>Not Banking</Text>
          </View>

          <AntDesign name="down" size={20} color="black" />
        </Pressable>

        <View style={{ paddingVertical: 70 }}>
          <Button
            buttonColor={COLORS.light.primary}
            textColor={COLORS.light.white}
            buttonText={"SEND FOR CONFIRMATION"}
            onPress={() =>
              navigation.navigate("YelloLoader", { status: "failed" })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PaymentConfirmation;
