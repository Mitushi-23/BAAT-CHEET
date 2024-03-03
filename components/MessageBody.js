import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserType } from "../userContext";
import { useRoute } from "@react-navigation/native";

const MessageBody = ({ messages }) => {
  const { userId } = useContext(UserType);

  const formDate = (time) => {
    const messageDate = new Date(time);
    const currentDate = new Date();

    if (
      messageDate.getDate() === currentDate.getDate() &&
      messageDate.getMonth() === currentDate.getMonth() &&
      messageDate.getFullYear() === currentDate.getFullYear()
    ) {
      return "Today";
    } else {
      currentDate.setDate(currentDate.getDate() - 1);
      if (
        messageDate.getDate() === currentDate.getDate() &&
        messageDate.getMonth() === currentDate.getMonth() &&
        messageDate.getFullYear() === currentDate.getFullYear()
      ) {
        return "Yesterday";
      } else {
        const dayOption = { day: "numeric", month: "numeric", year: "2-digit" };
        return new Date(time).toLocaleString("en-US", dayOption);
      }
    }
  };

  const formTime = (time) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(time).toLocaleString("en-US", options);
  };

  // Group messages by date
  const groupedMessages = {};
  messages?.forEach((message) => {
    const date = formDate(message.timeStamp);
    if (!groupedMessages[date]) {
      groupedMessages[date] = [];
    }
    groupedMessages[date].push(message);
  });

  return (
    <View style={{ flex: 1 }}>
      {Object.keys(groupedMessages).map((date) => (
        <View key={date}>
          <Text
            style={{
              textAlign: "center",
              margin: 10,
              backgroundColor: "#dedfe0",
              padding: 6,
              borderRadius: 6,
              maxWidth: "60%",
              alignSelf:'center'
            }}
          >
            {date}
          </Text>
          {groupedMessages[date].map((item, index) =>
            item.messageType === "text" ? (
              <Pressable
                key={index}
                style={[
                  item.senderId?._id === userId
                    ? {
                        alignSelf: "flex-end",
                        backgroundColor: "#83de9d",
                        padding: 8,
                        borderRadius: 12,
                        maxWidth: "60%",
                        margin: 10,
                      }
                    : {
                        alignSelf: "flex-start",
                        backgroundColor: "white",
                        padding: 8,
                        borderRadius: 12,
                        maxWidth: "60%",
                        margin: 10,
                      },
                ]}
              >
                <Text style={{ fontSize: 13, textAlign: "left" }}>
                  {item.message}
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    fontSize: 10,
                    color: "gray",
                  }}
                >
                  {formTime(item.timeStamp)}
                </Text>
              </Pressable>
            ) : item.messageType === "image" ? (
              <Pressable
                key={index}
                style={[
                  item.senderId?._id === userId
                    ? {
                        alignSelf: "flex-end",
                        backgroundColor: "#83de9d",
                        padding: 8,
                        borderRadius: 12,
                        maxWidth: "60%",
                        margin: 10,
                      }
                    : {
                        alignSelf: "flex-start",
                        backgroundColor: "white",
                        padding: 8,
                        borderRadius: 12,
                        maxWidth: "60%",
                        margin: 10,
                      },
                ]}
              >
                <Image
                  source={{ uri: item.imageUrl }}
                  style={{ width: 200, height: 200, borderRadius: 7 }}
                />
                <Text
                  style={{
                    textAlign: "right",
                    fontSize: 10,
                    color: "white",
                    position: "absolute",
                    right: 12,
                    bottom: 10,
                  }}
                >
                  {formTime(item.timeStamp)}
                </Text>
              </Pressable>
            ) : (
              <></>
            )
          )}
        </View>
      ))}
    </View>
  );
};

export default MessageBody;
