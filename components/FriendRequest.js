import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { UserType } from "../userContext";
import { useNavigation } from "@react-navigation/native";

const FriendRequest = ({ item, friendRequest, sentFriendRequest }) => {
  const { userId, setUserId } = useContext(UserType);
  const navigation = useNavigation();
  const handleAccept = async (friendRequestId) => {
    try {
      const response = await fetch(
        "http://192.168.132.101:8000/api/user/friend-request/accept",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            senderId: friendRequestId,
            recepientId: userId,
          }),
        }
      );

      if (response.ok) {
        sentFriendRequest(
          friendRequest.filter((requests) => requests._id !== friendRequestId)
        );
      }
      navigation.navigate("Chats");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 50, height: 50, borderRadius: 25, resizeMode: "cover" }}
      />
      <Text style={{ fontSize: 15, flex: 1, marginLeft: 10 }}>
        {item?.name} has sent you a request!
      </Text>
      <Pressable
        onPress={() => handleAccept(item._id)}
        style={{
          borderWidth: 2,
          borderColor: "#83de9d",
          padding: 7,
          borderRadius: 6,
          width: 85,
        }}
      >
        <Text style={{ textAlign: "center" }}>Accept</Text>
      </Pressable>
    </Pressable>
  );
};

export default FriendRequest;

const styles = StyleSheet.create({});
