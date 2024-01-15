import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import InputBox from "../components/InputBox";
import { UserType } from "../userContext";
import { RecepientProfile } from "../components/MessageHeader";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import MessageBody from "../components/MessageBody";

const ChatMessageScreen = () => {
  const { userId } = useContext(UserType);
  const navigation = useNavigation();
  const [recepientData, setRecepientData] = useState(null);
  const [messages, setMessages] = useState(null);
  const route = useRoute();
  const { recepientId } = route.params;

  const recepientDetail = async () => {
    try {
      const response = await axios.get(
        `http://192.168.132.101:8000/api/user/${recepientId}`
      );
      setRecepientData(response.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `http://192.168.132.101:8000/api/message/messages/${userId}/${recepientId}`
      );
      const data = await response.data;
      setMessages(data);
    } catch (error) {
      console.log("error in showing message", error);
    }
  };
 
  useEffect(() => {
    recepientDetail();
    fetchMessages();
  }, []);

  useEffect(() => {
    if (recepientData) {
      navigation.setOptions(
        RecepientProfile({ data: recepientData, navigation: navigation })
      );
    }
  }, [recepientData, navigation]);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView>
        <MessageBody messages={messages} />
      </ScrollView>
      <InputBox fetchMessages={fetchMessages} />
    </KeyboardAvoidingView>
  );
};

export default ChatMessageScreen;

const styles = StyleSheet.create({});
