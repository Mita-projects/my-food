import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../constants/StatusBar";
import { styles } from "../constants/styles";
import { COLORS } from "../constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../widget/Input";
import { Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import MenuCard from "../components/MenuCard";



const menuData = [
  {
    id: 1,
    img: "https://s3-alpha-sig.figma.com/img/1792/9604/1bd02d890f2869db495ce893d412ca5f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e9sjPQ5Z0b29KRSqdU6rZIKP2KRD3FBTvypB6TsdpCttDbB4cONMikGztAUFVBtT4s7tQjtXXwS4~leYlMPUOc93LiGRR5J9sCVBPDlnZNYCZ~ghT0eZC9EFNvTIx73D4NGHWl~YDQfCt6dXqIUklU05YQXvIcJe-1lXsOBjzXf4ip-i9MFosHNvR-Z9xXG5aHB7EFzU6SrfWwmDvA~dCmFdKHqX~JCbFTF2XBGHZotYklCmLpptxHT9SKMau8~QvYe5lwO3qgpczOmDHqO9-cLtPpbd-B-9ntaMjckWTuZtJtIU3yIVPqFnTKK9Ph-b7Vk9bqsdO8402icogG1c8Q__",
    meal: "Chicken Rice Brawl",
    price: "$10.00",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/35ca/ac74/4bc76fa596d8d23eddb2c518b571b88a?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FUKnNI7AiDvo7Y0D5zFqlQj57FNX9fKXdqy0rvmpKO7bF~tqTFaP739K2VZFnif9kiMTh5-KWWoCBQeuFexcDIR-Fz7MdzoX0Z4RKkH9M4-5MdwqRSvtuYrGL072pFEEKOYdS9Iy2hI4FIw8t8thV1cF9SQEp9RwxyO3sRa-6dBoJxpmPqLNvOvPy~Mxmoddx7NoIhXmxpKOWkvvN28LW4bRP21RpCkULqUZK3YrYkV8EDwI8MLOyDfzgsNSqb0EbBXb02K0kH0vqL~81aiocxyoP1SVyLUNN2DrBG~7IFxZCmtvW2Nam-DL7Q8CRa5FyvV4W-R0xrebdquo8-JTpA__",
    meal: "Grilled Chicken",
    price: "$15.00",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/44d1/5ecd/b6ed4b34ef8ecc5ff64da7a0fc650ab5?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXSaX-Sd6fgpHVUFG7tp1Z5TYvZkJ1UGvdn5i18q7nVFrJop264wguPrukBeNyf1n3QK3Kiq7Vi-xzlmfEFHhO6T~VYy~0qV9g0aaVJRUOYIaFj3uty7DtaPSUAjkZklVWrkRoFC8W7iAtq9iY5u2K84B5pwL0m4QtlHHENlQVKRMVd-XUZ4y88LShptI6Iey-Bavvee7Elm2J3kIUJJW3GKnXYSXYBHil9VavlAr7oQsWKgPeXcrq1smcoX9i8FDT0TtkR7bDPWE8hHOtMJPfbwRV~ZjS-NWmQmA3Id4WC56DZ9uxvOgC27nqjXfjtDsnEIow8nHxh7q1GMhmuM5Q__",
    meal: "Barbeque",
    price: "$9.00",
  },
  {
    id: 4,
    img: "https://s3-alpha-sig.figma.com/img/fc55/3eed/5500f3229b113222fdd4e6cdd0f56c4b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Evoq5MrPk5VCr~coo9THgcyVa3SeHgB6h~dgklNXozMmFUmzJyGNKXkchnbeI1TBS4K8ywbJdvPDf5MK5dMfw-eHEPEKcKRc-1hdhl-uTIcTpKMH7Z-yfgQFhKOmdlpQ7MbkVqZoaP5QGy8Jz~Gn9wX0rK-9zzUcm6n3~xAn2COI2b4cRTBrjxnk0FBLDj5wDfX3s4GfUsvJ8QowYEsD5tTYOmfApgfMQREq6tjI-~91HpGuhb6SkoKmSMDQLGEieJuAnYFHFWeyJRoLjwdMb4lrkWMT7yLCMyd~hRw7qTFWLA7YAPM0hvouC1ogUZdF-juiUHlODbfCy4ffclfM8g__",
    meal: "Egusi",
    price: "$3.00",
  },
  {
    id: 5,
    img: "https://s3-alpha-sig.figma.com/img/1792/9604/1bd02d890f2869db495ce893d412ca5f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e9sjPQ5Z0b29KRSqdU6rZIKP2KRD3FBTvypB6TsdpCttDbB4cONMikGztAUFVBtT4s7tQjtXXwS4~leYlMPUOc93LiGRR5J9sCVBPDlnZNYCZ~ghT0eZC9EFNvTIx73D4NGHWl~YDQfCt6dXqIUklU05YQXvIcJe-1lXsOBjzXf4ip-i9MFosHNvR-Z9xXG5aHB7EFzU6SrfWwmDvA~dCmFdKHqX~JCbFTF2XBGHZotYklCmLpptxHT9SKMau8~QvYe5lwO3qgpczOmDHqO9-cLtPpbd-B-9ntaMjckWTuZtJtIU3yIVPqFnTKK9Ph-b7Vk9bqsdO8402icogG1c8Q__",
    meal: "Egusi",
    price: "$3.00",
  },
  {
    id: 6,
    img: "https://s3-alpha-sig.figma.com/img/fc55/3eed/5500f3229b113222fdd4e6cdd0f56c4b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Evoq5MrPk5VCr~coo9THgcyVa3SeHgB6h~dgklNXozMmFUmzJyGNKXkchnbeI1TBS4K8ywbJdvPDf5MK5dMfw-eHEPEKcKRc-1hdhl-uTIcTpKMH7Z-yfgQFhKOmdlpQ7MbkVqZoaP5QGy8Jz~Gn9wX0rK-9zzUcm6n3~xAn2COI2b4cRTBrjxnk0FBLDj5wDfX3s4GfUsvJ8QowYEsD5tTYOmfApgfMQREq6tjI-~91HpGuhb6SkoKmSMDQLGEieJuAnYFHFWeyJRoLjwdMb4lrkWMT7yLCMyd~hRw7qTFWLA7YAPM0hvouC1ogUZdF-juiUHlODbfCy4ffclfM8g__",
    meal: "Egusi",
    price: "$3.00",
  },
  {
    id: 7,
    img: "https://s3-alpha-sig.figma.com/img/fc55/3eed/5500f3229b113222fdd4e6cdd0f56c4b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Evoq5MrPk5VCr~coo9THgcyVa3SeHgB6h~dgklNXozMmFUmzJyGNKXkchnbeI1TBS4K8ywbJdvPDf5MK5dMfw-eHEPEKcKRc-1hdhl-uTIcTpKMH7Z-yfgQFhKOmdlpQ7MbkVqZoaP5QGy8Jz~Gn9wX0rK-9zzUcm6n3~xAn2COI2b4cRTBrjxnk0FBLDj5wDfX3s4GfUsvJ8QowYEsD5tTYOmfApgfMQREq6tjI-~91HpGuhb6SkoKmSMDQLGEieJuAnYFHFWeyJRoLjwdMb4lrkWMT7yLCMyd~hRw7qTFWLA7YAPM0hvouC1ogUZdF-juiUHlODbfCy4ffclfM8g__",
    meal: "Egusi",
    price: "$3.00",
  },
  {
    id: 8,
    img: "https://s3-alpha-sig.figma.com/img/fc55/3eed/5500f3229b113222fdd4e6cdd0f56c4b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Evoq5MrPk5VCr~coo9THgcyVa3SeHgB6h~dgklNXozMmFUmzJyGNKXkchnbeI1TBS4K8ywbJdvPDf5MK5dMfw-eHEPEKcKRc-1hdhl-uTIcTpKMH7Z-yfgQFhKOmdlpQ7MbkVqZoaP5QGy8Jz~Gn9wX0rK-9zzUcm6n3~xAn2COI2b4cRTBrjxnk0FBLDj5wDfX3s4GfUsvJ8QowYEsD5tTYOmfApgfMQREq6tjI-~91HpGuhb6SkoKmSMDQLGEieJuAnYFHFWeyJRoLjwdMb4lrkWMT7yLCMyd~hRw7qTFWLA7YAPM0hvouC1ogUZdF-juiUHlODbfCy4ffclfM8g__",
    meal: "Egusi",
    price: "$3.00",
  },
];

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: COLORS.light.white }]}
    >
      <FocusedStatusBar
        backgroundColor={COLORS.light.white}
        barStyle={"dark-content"}
      />

      <View style={[styles.container, { flex: 1 }]}>
        <View
          style={styles.rowGap}
        >    
          <Pressable onPress={()=>navigation.navigate("YelloLoader")}>
            <Image source={require("../assets/images/menu.png")} />
          </Pressable>     
            
          
                     
          <View style={{flexDirection: "row", alignItems:"center", justifyContent:"" }}>
            <MaterialCommunityIcons name="map-marker-radius" size={14} color="#FFA500" />
            <Text>Lagos,Nigeria</Text>
            <MaterialIcons name="keyboard-arrow-down" size={18} color="#FFA500" />
          </View>
          <Image
            style={styles.profilePic}
            source={require("../assets/images/unsplash_gqX0rPCmdiU.png")}
          />
        </View>

        <View
          style={{
            paddingTop: 20,
            paddingBottom: 10,
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Input
            backgroundColor={COLORS.light.white}
            borderColor={"black"}
            borderWidth={1}
            placeholder={"Search..."}
          />
          <View
            style={{
              right: 30,
              zIndex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="search" size={24} color="black" />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={[styles.bigText, { color: "black" }]}>Hello Czar</Text>
          <Text>choose your delicious meal</Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              gap: 5,
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            {menuData.map((items) => (             
                <MenuCard key={items.id} items={items} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
