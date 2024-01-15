import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import EmojiSelector from "react-native-emoji-selector";
import { UserType } from "../userContext";
import { useRoute } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const InputBox = ({ fetchMessages }) => {
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const [messageText, setMessageText] = useState("");
  const { userId, setUserId } = useContext(UserType);

  const [selectedImage, setSelectedImage] = useState("");
  const route = useRoute();
  const { recepientId } = route.params;

  const handleEmojiPress = () => {
    setShowEmojiSelector(!showEmojiSelector);
  };

  const handleSend = async (messageType, imageUri) => {
    try {
      const data = {
        senderId: userId,
        receiverId: recepientId,
      };

      if (messageType === "image") {
        data.messageType = "image";
        data.imageUrl = imageUri;
      } else {
        data.messageType = "text";
        data.messageText = messageText;
      }
      const response = await axios.post(
        "http://192.168.132.101:8000/api/message/messages",
        data
      );
      if (response.status === 200) {
        setMessageText("");
        setSelectedImage("");
        fetchMessages();
      }
    } catch (error) {
      console.log("error in sending message", error);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result.assets[0].uri);
    if (!result.canceled) {
      handleSend("image", result.assets[0].uri);
    }
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          borderTopColor: "#dddddd",
          borderTopWidth: 1,
          marginBottom: showEmojiSelector ? 0 : 25,
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
          <Entypo name="camera" size={24} color="gray" onPress={pickImage} />
          <Entypo name="mic" size={24} color="gray" />
        </View>
        <Pressable onPress={() => handleSend("text")}>
          <Feather name="send" size={24} color="black" />
        </Pressable>
      </View>
      {showEmojiSelector && (
        <EmojiSelector
          onEmojiSelected={(emoji) => {
            setMessageText((prevMessage) => prevMessage + emoji);
          }}
        />
      )}
    </>
  );
};

export default InputBox;

const styles = StyleSheet.create({});