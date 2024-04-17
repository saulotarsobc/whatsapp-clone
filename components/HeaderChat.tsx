import { Image, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "@/constants/Colors";
import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function HeaderChat({ chat }: { chat: any }) {
  return (
    <View
      id="header"
      className="w-full h-16 px-4 flex flex-row justify-between items-center"
      style={{ backgroundColor: COLORS.light.headerBgColor }}
    >
      <View className="flex flex-row gap-1 justify-center items-center">
        <TouchableOpacity
          id="BachNameAndPhoto"
          className="flex flex-row justify-center items-center gap-1"
          onPress={() => {
            router.back();
          }}
        >
          <Ionicons name="arrow-back-sharp" size={24} color="#fff" />

          <View className="h-10 aspect-square rounded-full overflow-hidden">
            <Image
              className="h-full w-full"
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
          <Text className="text-white text-xl font-semibold">
            {chat.to?.name && chat.to?.name}
          </Text>
          <Text className="text-white text-xs">Visto agurinha oh!</Text>
        </TouchableOpacity>
      </View>

      <View id="icons" className="flex flex-row gap-4">
        <TouchableOpacity
          className="h-8 w-8 items-center justify-center"
          onPress={() => {
            console.log("chamada de video", "chat");
          }}
        >
          <Ionicons name="videocam" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          className="h-8 w-8 items-center justify-center"
          onPress={() => {
            console.log("chamada de voz chat");
          }}
        >
          <MaterialIcons name="call" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          className="h-8 w-8 items-center justify-center"
          onPress={() => {
            console.log("menu-popup no chat");
          }}
        >
          <Feather name="more-vertical" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
