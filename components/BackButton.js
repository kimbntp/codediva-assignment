import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../lib/tailwind.js";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View style={tw`w-10% mt-5 left-3%`}>
        <TouchableOpacity onPress={() => {navigation.goBack()}} style={tw`p-2 `}>
      <Image
        source={require("../assets/close.png")}
        style={tw`w-1.5rem h-1.5rem items-start`}
      />
        </TouchableOpacity>
    </View>
  );
};

export default BackButton;
