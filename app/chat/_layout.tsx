import { COLORS } from "@/constants/Colors";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.light.headerBgColor} style="dark" />

      <Stack screenOptions={{ headerShadowVisible: false }}>
        <Stack.Screen name="[chatId]" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};
