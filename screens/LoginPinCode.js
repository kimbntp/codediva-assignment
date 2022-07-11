import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import tw from "../lib/tailwind.js";
import { useNavigation } from "@react-navigation/native";
import TouchID from "react-native-touch-id";

const LoginPinCode = () => {
  useEffect(() => {
    Alert.alert("Touch ID", "Touch ID is not supported on this device", [
      {
        text: "ยกเลิก",
        style: "cancel",
      },
      { text: "OK" },
    ]);
  }, []);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw``}>
      {/* Top secion */}
      <View style={tw`flex self-center h-60% top-25%`}>
        <View style={tw`flex items-center`}>
          <Text style={tw`text-base text-black`}>กรุณากรอกรหัส PIN</Text>
        </View>
        {/* Fill status */}
        <View style={tw`self-center flex content-start p-2 mt-3`}>
          {/* 6 circles next to each others */}
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`w-1.2rem h-1.2rem mx-3 rounded-full border-[#7A7A7A] border-2`}
            />
            <View
              style={tw`w-1.2rem h-1.2rem mx-3 rounded-full border-[#7A7A7A] border-2`}
            />
            <View
              style={tw`w-1.2rem h-1.2rem mx-3 rounded-full border-[#7A7A7A] border-2`}
            />
            <View
              style={tw`w-1.2rem h-1.2rem mx-3 rounded-full border-[#7A7A7A] border-2`}
            />
            <View
              style={tw`w-1.2rem h-1.2rem mx-3 rounded-full border-[#7A7A7A] border-2`}
            />
            <View
              style={tw`w-1.2rem h-1.2rem mx-3 rounded-full border-[#7A7A7A] border-2`}
            />
          </View>
        </View>

        <View style={tw`flex`}>
          {/* 3 by 4 circles with numbers in them */}
          <View style={tw`flex flex-row flex-wrap justify-center mt-20`}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    // navigation.navigate("SetPinVerify");
                  }}
                  key={number}
                >
                  <View
                    style={tw`w-5rem h-5rem mx-1rem mb-1rem rounded-full border-[#979797] border-2 items-center justify-center`}
                    key={number}
                  >
                    <Text style={tw`text-2xl text-black`} key={number}>
                      {number}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginPinCode;
