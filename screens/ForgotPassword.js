import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import tw from "../lib/tailwind.js";

import BackButton from "../components/BackButton";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <BackButton />
      <View style={tw`relative flex h-100%`}>
        {/* Title Text */}
        <View style={tw`flex items-start mt-1rem w-75%`}>
          <View style={tw`px-5 mb-3`}>
            <Text style={tw`font-bold text-2xl`}>ลืมรหัสผ่าน?</Text>
          </View>
          <View style={tw`px-5`}>
            <Text style={tw`text-xl `}>
              กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่ลงทะเบียน
            </Text>
          </View>
        </View>

        {/* Username Input */}
        <View style={tw`px-5 w-100% h-1rem mt-6rem`}>
          <TextInput
            style={tw`flex text-base pl-1 h-1.5rem`}
            placeholder="อีเมล / เบอร์โทรศัพท์"
          />
          <View style={tw`bg-[#E4E4E4] w-100% self-center h-1px mt-1`} />
        </View>

        {/* Button at the bottom of the screen */}
        <View style={tw`flex w-100% mt-3rem`}>
          {/* Log in button  */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ForgotPasswordConfirm");
            }}
            style={tw`bg-blue py-1rem w-90% items-center self-center rounded-lg border-2 border-blue`}
          >
            <Text style={tw`text-white text-base`}>
              ส่ง
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
