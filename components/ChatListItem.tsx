import { COLORS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export function ChatListItem({ chat }: { chat: any }) {
  return (
    <View className="h-20 w-full px-3 flex flex-row items-center">
      <TouchableOpacity
        id="avatar"
        className="h-14 aspect-square rounded-full overflow-hidden"
        onPress={() => {
          console.log("avatar", chat.id);
        }}
      >
        <Image
          className="h-full w-full"
          source={require("../assets/images/avatar.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        className="w-5/6 pl-3"
        onPress={() => {
          console.log("chat", chat.id);
          router.navigate(`/chat/id=${chat.id}`);
        }}
      >
        {/* name and time */}
        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-lg" style={{ color: COLORS.light.text }}>
            {chat.to.name}
          </Text>

          <Text className="text-xs" style={{ color: COLORS.light.text }}>
            {/* {chat.msg.time} */}
            00:00
          </Text>
        </View>

        {/* status and message */}
        <View className="flex flex-row">
          <View className="h-5 w-5 rounded-full flex justify-center items-center">
            {/* <AntDesign name="check" size={20} color="black" /> */}
            <Ionicons name="checkmark-done-outline" size={18} color="#6CD4FC" />
          </View>
          <View className="w-11/12 truncate">
            <Text
              className="opacity-75"
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ color: COLORS.light.text }}
            >
              {chat.msg.body}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
