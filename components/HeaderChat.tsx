import { Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants/Colors";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SPACE, WINDOW_W } from "@/constants/Sizes";

export default function HeaderChat({ chat }: { chat: any }) {
  return (
    <View
      id="header"
      style={{
        backgroundColor: COLORS.light.headerBgColor,
        width: WINDOW_W,
        paddingHorizontal: SPACE * 2,
        height: 70,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "#444",
          gap: 5,
        }}
      >
        <TouchableOpacity
          id="BackNameAndPhoto"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            style={{
              color: COLORS.light.text,
            }}
          />

          <View
            style={{
              height: 50,
              aspectRatio: "1/1",
              borderRadius: 1000,
              overflow: "hidden",
            }}
          >
            <Image
              style={{
                height: 50,
                aspectRatio: "1/1",
              }}
              source={
                chat.to?.photo
                  ? { uri: chat.to.photo }
                  : require("../assets/images/avatar.png")
              }
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log("mais informações sobre o perfil", chat.id);
          }}
        >
          <Text
            style={{
              color: COLORS.light.text,
              fontWeight: "500",
              fontSize: 18,
            }}
          >
            {chat.to?.name && chat.to?.name}
          </Text>
          <Text>Visto agurinha oh!</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#fff3",
            height: 30,
          }}
          onPress={() => {
            console.log("chamada de video", "chat");
          }}
        >
          <Ionicons name="videocam" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#fff3",
            height: 30,
          }}
          onPress={() => {
            console.log("chamada de voz chat");
          }}
        >
          <MaterialIcons name="call" size={24} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#fff3",
            height: 30,
          }}
          onPress={() => {
            console.log("menu-popup no chat");
          }}
        >
          <Feather name="more-vertical" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
