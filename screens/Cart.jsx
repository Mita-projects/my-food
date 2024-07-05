import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import FocusedStatusBar from "../constants/StatusBar";
import { styles } from "../constants/styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/Colors";
import Button from "../widget/Button";

const Cart = () => {
  const price = 15.0;

  const navigation = useNavigation();
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(price);


  useEffect(() => {
    const handleTotalPrice = () => {
      const calTotal = price * count;
      setTotal(calTotal);
    };

    handleTotalPrice();
  }, [count]);

  const handleCount = (sign) => {
    switch (sign) {
      case "+":
        setCount((prevState) => prevState + 1);
        break;

      case "-":
        if (count > 1) {
          setCount((prevState) => prevState - 1);
        }
        break;

      default:
        setCount(count);
        break;
    }
  };

  return (
    <ScrollView
      style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={"dark-content"}
      />

      <View style={styles.container}>
        <AntDesign
          name="left"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Details")}
        />
        <View style={{ paddingVertical: 30 }}>
          <Image source={require("../assets/images/chickenricebowl.png")} />
        </View>

        <Text>Chiken Rice Bowl </Text>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            paddingVertical: 40,
          }}
        >
          <Text style={styles.bigText2}>$15.00</Text>

          <View style={styles.moneyCon}>
            <Pressable onPress={() => handleCount("-")}>
              <Image source={require("../assets/images/minus.png")} />
            </Pressable>
            <View style={styles.numberCon}>
              <Text>{count}</Text>
            </View>
            <Pressable onPress={() => handleCount("+")}>
              <Image source={require("../assets/images/plus.png")} />
            </Pressable>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 30,
          }}
        >
          <Text style={styles.mediumText2}>Total</Text>

          <Text style={styles.mediumText2}>${total}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: 70,
          }}
        >
          <Text style={styles.mediumText2}>Delivery to Czar:</Text>

          <View style={styles.deliveryCon}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur, somewhere in Lagos.
            </Text>
          </View>
        </View>

        <Button
          buttonColor={COLORS.light.success}
          textColor={COLORS.light.white}
          buttonText={"Checkout"}
          onPress={() => navigation.navigate("Checkout")}
        />
      </View>
    </ScrollView>
  );
};

export default Cart;
