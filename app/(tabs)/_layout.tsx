import { COLORS } from "@/constants/Colors";
import { AntDesign, Feather, MaterialIcons, Zocial } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import ChatsHeaderIcons from "@/components/ChatsHeaderIcons";

export default () => {
  NavigationBar.setBackgroundColorAsync(COLORS.light.footerBgColor);
  NavigationBar.setButtonStyleAsync("dark");

  return (
    <>
      <StatusBar backgroundColor={COLORS.light.headerBgColor} style="dark" />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            height: 60,
            backgroundColor: COLORS.light.footerBgColor,
          },
        }}
      >
        <Tabs.Screen
          name="chats"
          options={{
            // HEADER
            headerTitle: "WhatsApp",
            title: "Conversas",
            headerTitleAlign: "left",
            headerTitleStyle: {
              fontSize: 26,
              color: COLORS.light.whatassAppOnHeader,
            },
            headerStyle: {
              borderBottomColor: "#e0e0e0",
              borderBottomWidth: 0.4,
            },
            headerRight: () => <ChatsHeaderIcons />,

            // TAB
            tabBarLabelPosition: "below-icon",
            tabBarLabel: ({ focused, children }) => (
              <Text
                style={{
                  color: focused
                    ? COLORS.light.tabBarActiveTintColor
                    : COLORS.light.tabBarInactiveTintColor,
                  fontWeight: focused ? "900" : "400",
                }}
              >
                {children}
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <View>
                <View
                  style={{
                    backgroundColor: focused ? COLORS.light.tabBarFocused : "",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 36,
                    borderRadius: 36,
                    width: 85,
                  }}
                >
                  <AntDesign
                    name="message1"
                    size={23}
                    style={{
                      color: focused
                        ? COLORS.light.tabBarIconFocused
                        : COLORS.light.tabBarIconNoFocused,
                    }}
                  />
                </View>
                {/* <Text
                  style={{
                    color: COLORS.light.text,
                    fontWeight: focused ? "600" : "normal",
                  }}
                >
                  Conversas
                </Text> */}
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};
