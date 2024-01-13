import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Chat = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Messages", {
          recepientId: item._id,
        })
      }
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderBottomColor: "#DeDeDe",
        borderBottomWidth: 0.7,
        padding: 10,
        marginVertical: 10,
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: 50, height: 50, borderRadius: 25, resizeMode: "cover" }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{item.name}</Text>

        <Text style={{ fontSize: 15, color: "gray", fontWeight: 500 }}>
          Hi how are you
        </Text>
      </View>
      <View>
        <Text style={{ color: "#585858", fontWeight: 400 }}>3:00pm</Text>
      </View>
    </Pressable>
  );
};

export default Chat;

const styles = StyleSheet.create({});
