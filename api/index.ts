import { chats } from "../mock";

export const getAllChats = async () => {
  return chats;
};

export const getChatById = async (chatId: string) => {
  return chats.find((chat) => chat.id == chatId);
};
