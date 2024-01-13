import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserType } from "../userContext";
import axios from "axios";
import Chat from "../components/Chat";

const ChatScreen = () => {
  const { userId, setUserId } = useContext(UserType);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const response = await axios.get(
        `http://192.168.132.101:8000/api/user/friend-request/friends/${userId}`
      );

      const data = response.data;
      setFriends(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        {friends.map((item, index) => (
          <Chat key={index} item={item} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
