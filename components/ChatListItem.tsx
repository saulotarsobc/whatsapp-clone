import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { COLORS } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { SPACE, WINDOW_W } from "@/constants/Sizes";

export function ChatListItem({ chat }: { chat: any }) {
  return (
    <View
      style={{
        height: 70,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: SPACE * 2,
        width: WINDOW_W,
      }}
    >
      <TouchableOpacity
        style={{
          height: 60,
          aspectRatio: "1/1",
          borderRadius: 1000,
          overflow: "hidden",
        }}
        activeOpacity={0.7}
        touchSoundDisabled={true}
        onPress={() => {
          console.log("abrir avatar");
        }}
      >
        <Image
          style={{ height: 60, aspectRatio: "1/1" }}
          source={
            chat?.to.photo
              ? { uri: chat?.to.photo }
              : require("../assets/images/avatar.png")
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: WINDOW_W - 60 - SPACE * 2,
          paddingHorizontal: SPACE * 2,
          gap: 3,
        }}
        activeOpacity={0.75}
        touchSoundDisabled={true}
        onPress={() => {
          router.navigate(`/chat/${chat?.id}`);
        }}
      >
        {/* name and time */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              color: COLORS.light.text,
              fontWeight: "600",
              fontSize: 15,
            }}
          >
            {chat?.to.name}
          </Text>

          <Text style={{ color: COLORS.light.text, opacity: 0.7 }}>
            {/* {chat?.msg.time} */}
            00:00
          </Text>
        </View>

        {/* status and message */}
        <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <View>
            <Ionicons
              name="checkmark-done-outline"
              size={20}
              style={{
                color: COLORS.turquese1,
              }}
            />
          </View>
          <View
            style={{
              width: WINDOW_W - 130,
              overflow: "hidden",
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={{ color: COLORS.light.text, opacity: 0.75 }}
            >
              {chat?.msg.body}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
