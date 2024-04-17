import { ScrollView } from "react-native";

import { chats } from "@/mock";
import { COLORS } from "@/constants/Colors";
import { ChatListItem } from "@/components/ChatListItem";
import HeaderIndex from "@/components/HeaderIndex";

export default function index() {
  return (
    <>
      <HeaderIndex />
      <ScrollView style={{ backgroundColor: COLORS.light.mainBgColor }}>
        {/* chat list */}
        {chats.map((chat) => (
          <ChatListItem key={"chat-" + chat.id} chat={chat} />
        ))}
      </ScrollView>
    </>
  );
}
