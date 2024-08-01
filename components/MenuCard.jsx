import { View, Text, Pressable, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../redux/favoriteRedux";

const MenuCard = ({ item }) => {
  const { favorites } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [heartColor, setHeartColor] = useState("#EEEEEE");
  const [addcolor, setaddColor] = useState("#EEEEEE");

  const handleAddFavorite = (favorite) => {
    dispatch(addFavorite(favorite));
  };

  let favoriteIds = [];
  useEffect(() => {
    favorites?.forEach((fav) => favoriteIds.push(fav.id));

    favoriteIds.includes(item.id)
      ? setHeartColor("#D20062")
      : setHeartColor("#EEEEEE");
  }, [favorites]);

  const changeColor = () => {
    setaddColor((prevColor) => (prevColor === "#EEEEEE" ? "green" : "#EEEEEE"));
  };

  return (
    <Pressable
      onPress={() => navigation.navigate("Details")}
      style={styles.foodMenu}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Pressable>
          <Ionicons name="radio-button-on-sharp" size={24} color="#FFA500" />
        </Pressable>
        <Pressable onPress={() => handleAddFavorite(item)}>
          <Ionicons name="heart" size={22} color={heartColor} />
        </Pressable>
      </View>

      <View style={styles.foodContainer}>
        <Image style={styles.foodPic} source={{ uri: item.img }} />
      </View>

      <Text>{item.meal} </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={[styles.bigText, { color: "#FFA500" }]}>
          {item.price}{" "}
        </Text>
        <Pressable onPress={changeColor}>
          <FontAwesome name="plus-circle" size={24} color={addcolor} />
        </Pressable>
      </View>
    </Pressable>
  );
};

export default MenuCard;
