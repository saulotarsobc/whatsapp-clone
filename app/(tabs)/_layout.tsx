import { COLORS } from "@/constants/Colors";
import { AntDesign, Feather, MaterialIcons, Zocial } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";

export default () => {
  NavigationBar.setBackgroundColorAsync(COLORS.light.footerBgColor);
  NavigationBar.setButtonStyleAsync("dark");

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 80,
          backgroundColor: COLORS.light.footerBgColor,
        },
      }}
    >
      <Tabs.Screen
        name="chats"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="h-16 flex justify-center items-center">
              <View
                className="h-10 w-20 flex justify-center items-center rounded-full"
                style={{
                  backgroundColor: focused ? "rgba(0, 0, 0, 0.195)" : "",
                }}
              >
                <AntDesign
                  name="message1"
                  size={26}
                  color={COLORS.light.text}
                />
              </View>
              <Text
                className={`mt-1 ${focused && "font-bold"}`}
                style={{ color: COLORS.light.text }}
              >
                Conversas
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="updates"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="h-16 flex justify-center items-center">
              <View
                className="h-10 w-20 flex justify-center items-center rounded-full"
                style={{
                  backgroundColor: focused ? "rgba(0, 0, 0, 0.195)" : "",
                }}
              >
                <Zocial name="statusnet" size={26} color={COLORS.light.text} />
              </View>
              <Text
                className={`mt-1 ${focused && "font-bold"}`}
                style={{ color: COLORS.light.text }}
              >
                Atualizações
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="communities"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="h-16 flex justify-center items-center">
              <View
                className="h-10 w-20 flex justify-center items-center rounded-full"
                style={{
                  backgroundColor: focused ? "rgba(0, 0, 0, 0.195)" : "",
                }}
              >
                <Feather
                  name="users"
                  size={26}
                  color={COLORS.light.footerText}
                />
              </View>

              <Text
                className={`mt-1 ${focused && "font-bold"}`}
                style={{ color: COLORS.light.text }}
              >
                Comunidades
              </Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="calls"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="h-16 flex justify-center items-center">
              <View
                className="h-10 w-20 flex justify-center items-center rounded-full"
                style={{
                  backgroundColor: focused ? "rgba(0, 0, 0, 0.195)" : "",
                }}
              >
                <MaterialIcons
                  name="call"
                  size={26}
                  color={COLORS.light.footerText}
                />
              </View>

              <Text
                className={`mt-1 ${focused && "font-bold"}`}
                style={{ color: COLORS.light.footerText }}
              >
                Ligações
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};
