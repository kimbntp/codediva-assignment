import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "../lib/tailwind.js";

import BackButton from "../components/BackButton";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import { useNavigation } from "@react-navigation/native";

const TouchIDSetUp = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={tw`relative flex h-100%`}>
        {/* Title Text */}
        <View style={tw`flex items-start mt-5rem w-100%`}>
          <View style={tw`px-5 pt-2 mb-3`}>
            <Text style={tw`font-bold text-2xl`}>Touch ID</Text>
          </View>
          <View style={tw`px-5`}>
            <Text style={tw`text-xl `}>ตั้งค่าล็อคอินด้วยลายนิ้วมือ &#13;</Text>
            <Text style={tw`text-xl `}>เพื่อการเข้าถึงที่รวดเร็วขึ้น </Text>
          </View>
        </View>

        {/* Image in the middle */}
        <View style={tw`flex items-center top-15% w-100%`}>
          <View style={tw`p-3 bg-white rounded-full content-center shadow-md`}>
            <Image
              source={require("../assets/TouchID.png")}
              style={tw`w-80px h-80px self-center`}
            />
          </View>
        </View>

        {/* Button at the bottom of the screen */}
        <View style={tw`flex absolute w-100% bottom-15%`}>
          {/* Log in button  */}
          <TouchableOpacity
            // onPress={() => {
            //   navigation.navigate("OTPInput");
            // }}
            style={tw`bg-blue py-1rem w-90% items-center self-center rounded-lg border-2 border-blue`}
          >
            <Text style={tw`text-white text-base font-bold`}>
              ตั้งค่าลายนิ้วมือ
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginPinCode");
            }}
            style={tw`py-1rem w-90% items-center self-center mt-1rem `}
          >
            <Text style={tw`text-blue text-base font-bold`}>ข้าม</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TouchIDSetUp;
