import { COLORS } from "@/constants/Colors";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { router, useFocusEffect } from "expo-router";
import { View } from "react-native";

export default () => {
  useFocusEffect(() => {
    router.replace("/chat");
  });

  return (
    <View>
      <StatusBar backgroundColor={COLORS.light.headerBgColor} style="light" />
    </View>
  );
};
