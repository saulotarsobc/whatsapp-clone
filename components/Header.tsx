import { COLORS } from "@/constants/Colors";
import React from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
  View,
} from "react-native";

import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

export default function Header() {
  return (
    <SafeAreaView>
      <Animated.View
        id="header"
        className="w-full h-16 px-4 flex flex-row justify-between items-center"
        style={{ backgroundColor: COLORS.light.headerBgColor }}
      >
        <Text className="text-white text-xl">WhatsApp</Text>

        <View id="icons" className="flex flex-row gap-4">
          <TouchableOpacity
            className="h-8 w-8 items-center justify-center"
            onPress={() => {
              console.log("camera");
            }}
          >
            <Feather name="camera" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            className="h-8 w-8 items-center justify-center"
            onPress={() => {
              console.log("search");
            }}
          >
            <AntDesign name="search1" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            className="h-8 w-8 items-center justify-center"
            onPress={() => {
              console.log("menu-popup");
            }}
          >
            <Feather name="more-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}
