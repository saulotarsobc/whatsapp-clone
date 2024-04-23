import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

import { COLORS } from "@/constants/Colors";
import { AntDesign, Feather } from "@expo/vector-icons";

export default function ChatsHeaderIcons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        touchSoundDisabled
        activeOpacity={0.3}
        style={styles.buttons}
        onPress={() => {
          console.log("camera");
        }}
      >
        <Feather name="camera" size={24} style={styles.icons} />
      </TouchableOpacity>

      <TouchableOpacity
        touchSoundDisabled
        activeOpacity={0.3}
        style={styles.buttons}
        onPress={() => {
          console.log("search");
        }}
      >
        <AntDesign name="search1" size={24} style={styles.icons} />
      </TouchableOpacity>

      <TouchableOpacity
        touchSoundDisabled
        activeOpacity={0.3}
        style={styles.buttons}
        onPress={() => {
          console.log("menu-popup");
        }}
      >
        <Feather name="more-vertical" size={24} style={styles.icons} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 5,
  },
  buttons: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  icons: {
    color: COLORS.light.text,
    fontWeight: "900",
  },
});
