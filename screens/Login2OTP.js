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

const Login2OTP = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`flex-1 content-center bg-offwhite`}>
        {/* Back button */}
            <BackButton/>
      {/* Info Section */}
      <View style={tw`flex items-center top-20% w-100%`}>
        <View style={tw`px-5 pt-2`}>
          <Image
            source={require("../assets/lock.png")}
            style={tw`w-80px h-80px self-center`}
            resizeMode="contain"
          />
        </View>
        <View style={tw`px-5 mt-8`}>
          <Text style={tw`text-xl font-bold self-center mb-3`}>
            OTP จะถูกส่งไปที่เบอร์โทรศัพท์
          </Text>
          <Text style={tw`text-xl self-center text-blue font-bold`}>
            082-XXX-8998
          </Text>
        </View>
      </View>

      {/* Button section */}
      <View style={tw`flex top-30%`}>
        {/* Log in button  */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("OTPInput");
          }}
          style={tw`bg-blue py-1rem w-90% items-center self-center mb-7 rounded-lg border-2 border-blue`}
        >
          <Text style={tw`text-white text-xl font-bold`}>ขอรหัส OTP</Text>
        </TouchableOpacity>

        {/* Non-user section */}
        <View style={tw`flex`}>
          <View style={tw`h-10`}>
            <View style={tw`flex self-center absolute`}>
              <Text style={tw`text-textgrey text-xs opacity-70% `}>
                กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login2OTP;
