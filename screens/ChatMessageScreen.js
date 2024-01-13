import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import EmojiSelector from "react-native-emoji-selector";

const ChatMessageScreen = () => {
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [messageText, setMessageText] = useState("");

  const handleEmojiPress = () => {
    setShowEmojiSelector(!showEmojiSelector);
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView></ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderTopColor: "#dddddd",
          borderTopWidth: 1,
          marginBottom: showEmojiSelector?0:25,
        }}
      >
        <Entypo
          onPress={handleEmojiPress}
          style={{ marginRight: 5 }}
          name="emoji-happy"
          size={24}
          color="gray"
        />
        <TextInput
        value={messageText}
          onChangeText={(text) => setMessageText(text)}
          style={{
            flex: 1,
            height: 40,
            borderWidth: 1,
            borderColor: "#dddddd",
            paddingHorizontal: 10,
            borderRadius: 20,
          }}
          placeholder="Type your message"
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 7,
            marginLeft: 8,
            marginRight: 8,
          }}
        >
          <Entypo name="camera" size={24} color="gray" />
          <Entypo name="mic" size={24} color="gray" />
        </View>
        <Pressable>
          <Feather name="send" size={24} color="black" />
        </Pressable>
      </View>
      {showEmojiSelector && <EmojiSelector onEmojiSelected={(emoji)=>{
        setMessageText((prevMessage)=>prevMessage+emoji)
      }} />}
    </KeyboardAvoidingView>
  );
};

export default ChatMessageScreen;

const styles = StyleSheet.create({});
