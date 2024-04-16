import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "@/constants/Colors";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <>
      <StatusBar backgroundColor={COLORS.light.headerBgColor} style="light" />
      <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <View
                className={`${
                  focused ? "bg-slate-300" : null
                } w-3/4 h-8 flex justify-center items-center rounded-full`}
              >
                <AntDesign
                  name="message1"
                  size={24}
                  color={COLORS.light.text}
                />
              </View>
            ),
            tabBarLabel: "Conversas",
          }}
        />

        <Tabs.Screen
          name="calls"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <View
                className={`${
                  focused ? "bg-slate-300" : null
                } w-3/4 h-8 flex justify-center items-center rounded-full`}
              >
                <AntDesign
                  name="message1"
                  size={24}
                  color={COLORS.light.text}
                />
              </View>
            ),
            tabBarLabel: "Conversas",
          }}
        />
      </Tabs>
    </>
  );
}

// import { COLORS } from "@/constants/Colors";
// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";

// export default function Layout() {
//   return (
//     <>
//       <StatusBar backgroundColor={COLORS.light.headerBgColor} style="light" />
//       <Stack
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: COLORS.light.headerBgColor,
//           },
//           headerTintColor: "#fff",
//           headerTitleStyle: {
//             fontWeight: "400",
//           },
//         }}
//       >
//         <Stack.Screen
//           name="index"
//           options={{
//             title: "WhatsApp",
//             statusBarColor: COLORS.light.headerBgColor,
//           }}
//         />

//         <Stack.Screen
//           name="chat/[id]"
//           options={{
//             statusBarColor: COLORS.light.headerBgColor,
//             title: "",
//           }}
//         />
//       </Stack>
//     </>
//   );
// }
