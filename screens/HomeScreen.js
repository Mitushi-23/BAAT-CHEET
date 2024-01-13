import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { UserType } from "../userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import User from "../components/User";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { userId, setUserId } = useContext(UserType);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await AsyncStorage.getItem("userData");
      const storedData = JSON.parse(userData);
      const token = storedData.authToken;
      const userId = storedData.userId;
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
      setUserId(userId);

      axios
        .get(`http://192.168.132.101:8000/api/user/users/${userId}`, config)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchUser();
  }, []);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Image source={require("../assets/logo/BAATचीत.png")} />
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Ionicons
            name="chatbox-ellipses-outline"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Chats")}
          />
          <Ionicons
            name="people-outline"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Friends")}
          />
        </View>
      ),
    });
  }, []);
  return (
    <View>
      <View style={{ margin: 10 }}>
        {users.map((item, index) => (
          <User key={index} item={item} />
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
