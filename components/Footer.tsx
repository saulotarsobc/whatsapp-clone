import { COLORS } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export function Footer() {
  return (
    <View
      className="border-t-2 border-gray-100 w-full h-20 flex flex-row justify-around items-center"
      style={{
        backgroundColor: COLORS.light.footerBgColor,
      }}
    >
      <TouchableOpacity
        className="h-16 flex justify-center items-center w-1/4"
        onPress={() => {
          console.log("Conversas");
        }}
      >
        <View className="bg-slate-300 w-3/4 h-8 flex justify-center items-center rounded-full">
          <AntDesign name="message1" size={24} color={COLORS.light.text} />
        </View>
        <Text className="mt-2 font-bold" style={{ color: COLORS.light.text }}>
          Conversas
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="h-16 flex justify-center items-center w-1/4"
        onPress={() => {
          console.log("Atualizações");
        }}
      >
        <View className="w-3/4 h-8 flex justify-center items-center rounded-full">
          <AntDesign name="message1" size={24} color={COLORS.light.text} />
        </View>
        <Text className="mt-2" style={{ color: COLORS.light.text }}>
          Atualizações
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="h-16 flex justify-center items-center w-1/4"
        onPress={() => {
          console.log("Comunidades");
        }}
      >
        <View className="w-3/4 h-8 flex justify-center items-center rounded-full">
          <AntDesign name="message1" size={24} color={COLORS.light.text} />
        </View>
        <Text className="mt-2" style={{ color: COLORS.light.text }}>
          Comunidades
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="h-16 flex justify-center items-center w-1/4"
        onPress={() => {
          console.log("Ligações");
        }}
      >
        <View className="w-3/4 h-8 flex justify-center items-center rounded-full">
          <AntDesign name="message1" size={24} color={COLORS.light.text} />
        </View>
        <Text className="mt-2" style={{ color: COLORS.light.text }}>
          Ligações
        </Text>
      </TouchableOpacity>
    </View>
  );
}
