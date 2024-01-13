import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserType } from "../userContext";
import axios from "axios";

const User = ({ item }) => {
  const { userId, setUserId } = useContext(UserType);
  const [requestSent, setRequestSent] = useState(false);
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    fetchFriendRequests();
  }, []);

  const fetchFriendRequests = async () => {
    try {
      const response = await axios.get(
        `http://192.168.132.101:8000/api/user/friend-request/sent/${userId}`
      );
      const data = response.data;
      if (data) {
        setFriendRequests(data);
      }
    } catch (error) {
      console.log("error message", error);
    }
  };
  const handleFriendRequest = async (currentUserId, selectedUserId) => {
    try {
      const response = await fetch(
        "http://192.168.132.101:8000/api/user/friend-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ currentUserId, selectedUserId }),
        }
      );

      if (response.ok) {
        setRequestSent(true);
      }
    } catch (error) {
      console.log("Error in sending request", error);
    }
  };

  return (
    <Pressable
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 10 }}
    >
      <View>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 25,
            resizeMode: "cover",
          }}
        />
      </View>
      <View style={{ marginLeft: 12, flex: 1 }}>
        <Text>{item?.name}</Text>
        <Text style={{ color: "gray" }}>{item?.email}</Text>
      </View>
      {requestSent || friendRequests.some((friend) => friend === item._id) ? (
        <Pressable
          style={{
            borderWidth: 2,
            borderColor: "#83de9d",
            padding: 7,
            borderRadius: 6,
            width: 85,
          }}
        >
          <Text style={{ textAlign: "center" }}>Requested</Text>
        </Pressable>
      ) : (
        <Pressable
          style={{
            backgroundColor: "#83de9d",
            padding: 7,
            borderRadius: 6,
            width: 85,
          }}
          onPress={() => handleFriendRequest(userId, item._id)}
        >
          <Text style={{ textAlign: "center" }}>Add Friend</Text>
        </Pressable>
      )}
    </Pressable>
  );
};

export default User;

const styles = StyleSheet.create({});
