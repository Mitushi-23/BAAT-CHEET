import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const User = ({ item}) => {
  return (
    <Pressable style={{flexDirection:'row', alignItems:'center', marginVertical:10}}>
      <View>
        <Image source={{uri: item.image}}
        style={{width:40, height:40, borderRadius:25, resizeMode:'cover'}}
        />
      </View>
      <View style={{marginLeft:12, flex:1}}>
        <Text>{item?.name}</Text>
        <Text style={{color:'gray'}}>{item?.email}</Text>
      </View>
      <Pressable style={{backgroundColor:'#83de9d',padding:7,borderRadius:6, width:85}}>
        <Text style={{textAlign:'center'}}>Add Friend</Text>
      </Pressable>
    </Pressable>
  );
};

export default User;

const styles = StyleSheet.create({});
