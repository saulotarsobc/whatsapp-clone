import { getChatById } from "@/api";
import HeaderChat from "@/components/HeaderChat";
import { WINDOW_H, WINDOW_W } from "@/constants/Sizes";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from "react-native";

export default () => {
  const [chat, setChat] = useState<[] | any>([]);
  const { chatId } = useLocalSearchParams();

  const loadChat = useCallback(async () => {
    const data = await getChatById(String(chatId));
    setChat(data);
  }, [chatId]);

  useEffect(() => {
    loadChat();
  }, []);

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/bg-light.png")}
        style={{
          width: WINDOW_W,
          height: WINDOW_H,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />

      <View>
        <HeaderChat chat={chat} />

        <ScrollView style={{ backgroundColor: "transparent", padding: 20 }}>
          <Text>{JSON.stringify(chat, null, 4)}</Text>
        </ScrollView>
      </View>
    </>
  );
};
