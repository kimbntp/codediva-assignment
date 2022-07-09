import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import tw from "../lib/tailwind.js";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../components/BackButton.js";

const ForgotPasswordConfirm = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 content-center bg-offwhite`}>
      {/* Back button */}
      <BackButton />
      {/* Info Section */}
      <View style={tw`flex items-center top-10% w-100%`}>
        <View style={tw`p-10 rounded-full border-blue border-2`}>
          <Image
            source={require("../assets/Path.png")}
            style={tw`w-4rem h-4rem self-center`}
            resizeMode="contain"
          />
        </View>
        <View style={tw`px-5 mt-8`}>
          <Text style={tw`text-xl font-bold self-center mb-3`}>สำเร็จ</Text>
          <Text style={tw`text-xl self-center text-[#494949] font-semibold`}>
            รีเซ็ตรหัสผ่านของคุณสำเร็จแล้ว
          </Text>
        </View>
      </View>

      {/* Button section */}
      <View style={tw`flex mt-8rem`}>
        {/* Log in button  */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={tw`bg-blue py-1rem w-90% items-center self-center rounded-lg border-2 border-blue`}
        >
          <Text style={tw`text-white text-xl font-bold`}>ตกลง</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordConfirm;
