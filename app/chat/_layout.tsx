import { Stack } from "expo-router";

export default () => {
  return (
    <Stack screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen name="[chatId]" options={{ headerShown: false }} />
    </Stack>
  );
};
