import { View, Text, Pressable, Image, } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";


const FavoriteCards = ({items}) => {

    const navigation= useNavigation();
    const [addcolor, setaddColor] = useState("#EEEEEE");
    const changeColor = () => {
     setaddColor((prevColor) => (prevColor === "#EEEEEE" ? "green" : "#EEEEEE"));};

    return (
        <View style={styles.foodMenu}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Pressable onPress={()=> navigation.navigate("Home")}>
              <Ionicons name="radio-button-on-sharp" size={24} color="#FFA500" />
            </Pressable>
            <Pressable>
              <Ionicons name="heart" size={22} color={"#D20062"} />
            </Pressable>
          </View>
           
           <View style={styles.foodContainer} >
             <Image style={styles.foodPic} source={{ uri: items.img }} />
           </View>
                   
      
          <Text>{items.meal} </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={[styles.bigText, { color: "#FFA500" }]}>
              {items.price}{" "}
            </Text>
            <Pressable onPress={changeColor}>
              <FontAwesome name="plus-circle" size={24} color={addcolor} />
            </Pressable>
          </View>
        </View>
      );
      
};

export default FavoriteCards





