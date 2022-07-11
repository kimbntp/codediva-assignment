import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "../lib/tailwind.js";

import BackButton from "../components/BackButton";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/native";

const OTPInput = () => {
  const navigation = useNavigation();
  const [timer, setTimer] = React.useState(60);
  const [isPressable, setIsPressable] = React.useState(timer > 0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    if (timer === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  React.useEffect(() => {
    if (timer === 0) {
      setIsPressable(true);
    } else {
      setIsPressable(false);
    }
  }, [timer]);

  return (
    <SafeAreaView>
      {/* Back Button */}
      <BackButton />
      {/* Title Text */}
      <View style={tw`flex items-start mt-1rem w-100%`}>
        <View style={tw`px-5 pt-2 mb-3`}>
          <Text style={tw`font-bold text-2xl`}>ยืนยันตัวตน</Text>
        </View>

        <View style={tw`px-5`}>
          <Text style={tw`text-lg `}>
            กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ{" "}
          </Text>
        </View>
        <View style={tw`px-5`}>
          <Text style={tw`text-lg `}>082-XXX-8998 </Text>
        </View>
      </View>
      {/* OTP Input */}
      <View>
        <OTPInputView
          style={tw`flex items-center self-center w-85% h-1rem mt-6rem`}
          pinCount={6}
          autoFocusOnLoad
          codeInputFieldStyle={tw`border-0 border-b-2 border-grey text-2xl text-black`}
          onCodeFilled={(code) => {
            navigation.navigate("SetPin");
          }}
        />
      </View>

      {/* Resend OTP */}
      <View style={tw`flex items-center self-center w-100% mt-7rem`}>
        <View style={tw`px-5`}>
          <Text style={tw`text-lg `}>หากยังไม่ได้รับรหัส</Text>
          <TouchableOpacity
            onPress={() => {
              timer === 0 ? setTimer(60) : null;
            }}
            style={tw`self-center `}
            activeOpacity={isPressable ? 0.2 : 1}
          >
            {timer === 0 ? (
              <Text style={tw`text-lg text-blue `}>ส่งรหัสใหม่</Text>
            ) : (
              <Text style={tw`text-lg text-blue `}>
                ส่งรหัสใหม่ &#40;{timer}&#41;
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPInput;
