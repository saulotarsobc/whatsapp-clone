import { ScrollView } from "react-native";

import { chats } from "@/mock";
import { COLORS } from "@/constants/Colors";
import { ChatListItem } from "@/components/ChatListItem";

export default function index() {
  return (
    <>
      <ScrollView style={{ backgroundColor: COLORS.light.mainBgColor }}>
        {chats.map((chat) => (
          <ChatListItem key={"chat-" + chat.id} chat={chat} />
        ))}
      </ScrollView>
    </>
  );
}
