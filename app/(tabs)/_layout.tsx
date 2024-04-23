import { COLORS } from "@/constants/Colors";
import {
  AntDesign,
  Feather,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
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
          // HEADER
          headerTitleAlign: "left",
          headerStyle: {
            borderBottomColor: "#e0e0e0",
            borderBottomWidth: 0.4,
            height: 70,
            backgroundColor: COLORS.light.headerBgColor,
          },

          // TAB
          tabBarStyle: {
            height: 73,
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
            headerTitleStyle: {
              fontSize: 24,
              color: COLORS.light.whatassAppOnHeader,
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
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="updates"
          options={{
            // HEADER
            title: "Atualizações",
            headerTitle: ({ children }) => (
              <Text style={{ fontSize: 18 }}>{children}</Text>
            ),
            headerRight: () => <Text style={{ paddingRight: 30 }}>ICONS</Text>,

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
            tabBarIcon: ({ focused, size }) => (
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
                  <MaterialCommunityIcons
                    name="chat-processing-outline"
                    size={size}
                    style={{
                      color: focused
                        ? COLORS.light.tabBarIconFocused
                        : COLORS.light.tabBarIconNoFocused,
                    }}
                  />
                </View>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="communities"
          options={{
            // HEADER
            title: "Comunidades",
            headerTitle: ({ children }) => (
              <Text style={{ fontSize: 18 }}>{children}</Text>
            ),
            headerRight: () => <Text style={{ paddingRight: 30 }}>ICONS</Text>,

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
            tabBarIcon: ({ focused, size }) => (
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
                  <Fontisto
                    name="persons"
                    size={size}
                    style={{
                      color: focused
                        ? COLORS.light.tabBarIconFocused
                        : COLORS.light.tabBarIconNoFocused,
                    }}
                  />
                </View>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="calls"
          options={{
            // HEADER
            title: "Ligações",
            headerTitle: ({ children }) => (
              <Text style={{ fontSize: 18 }}>{children}</Text>
            ),
            headerRight: () => <Text style={{ paddingRight: 30 }}>ICONS</Text>,

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
            tabBarIcon: ({ focused, size }) => (
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
                  <Feather
                    name="phone"
                    size={size}
                    style={{
                      color: focused
                        ? COLORS.light.tabBarIconFocused
                        : COLORS.light.tabBarIconNoFocused,
                    }}
                  />
                </View>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
};
