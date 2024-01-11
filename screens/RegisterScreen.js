import {
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("")
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", padding: 10 }}>
      <KeyboardAvoidingView>
        <View
          style={{
            marginTop: 80,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, color: "#83de9d", fontWeight: 700 }}>
            Sign Up
          </Text>
          <Text style={{ fontSize: 15, marginTop: 10, fontWeight: "600" }}>
            Create Your Account
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>

        <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Name</Text>
            <TextInput
              value={name}
              onChange={(text) => setName(text)}
              placeholder="Enter your name"
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                width: 300,
                marginVertical: 5,
              }}
            />
          </View>

          <View style={{marginTop:20}}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Email</Text>
            <TextInput
              value={email}
              onChange={(text) => setEmail(text)}
              placeholder="Enter your email"
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                width: 300,
                marginVertical: 5,
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Password</Text>
            <TextInput
              value={password}
              onChange={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="Enter your password"
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                width: 300,
                marginVertical: 5,
              }}
            />
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>Image</Text>
            <TextInput
              value={image}
              onChange={(text) => setImage(text)}
              placeholder="Enter your image"
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                width: 300,
                marginVertical: 5,
              }}
            />
          </View>

          <Pressable
            style={{
              width: 200,
              backgroundColor: "#83de9d",
              padding: 15,
              marginTop: 50,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 30,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }}
            >
              Register
            </Text>
          </Pressable>
          <Pressable
            style={{ marginTop: 15 }}
            onPress={() => navigation.goBack()}
          >
            <Text style={{ textAlign: "center", color: "gray" }}>
              Already have an account? SignIn
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
