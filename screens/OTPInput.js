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
  // time 60 seconds
  // const [time, setTime] = React.useState(5);
  // const [isTimerRunning, setIsTimerRunning] = React.useState(true);

  // const [canRequest, setCanRequest] = React.useState(!isTimerRunning);

  // const startTimer = () => {
  //   setIsTimerRunning(true);
  //   clearInterval(interval);
  //   setTime(5);
  //   const interval = setInterval(() => {
  //     setTime((time) => time - 1);
  //   }, 1000);
  //   if (time === 0) {
  //     clearInterval(interval);
  //     setIsTimerRunning(false);
  //     setCanRequest(true);
  //   }
  // }

  // const stopTimer = () => {
  //   setIsTimerRunning(false);
  //   clearInterval(interval);
  // }

  // // stops the time when it reaches 0
  // React.useEffect(() => {
  //   if (time === 0) {
  //     stopTimer();
  //   }
  // }
  // , [time]);

  // // start the time when the page loads
  // React.useEffect(() => {
  //   if (isTimerRunning) {
  //     const interval = startTimer();
  //     return () => clearInterval(interval);
  //   } else {
  //     return () => {};
  //   }
  // }, [isTimerRunning]);

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
              navigation.navigate("OTPInput");
            }}
            style={tw`self-center `}
          >
            <Text style={tw`text-lg text-blue `}>
              ส่งรหัสใหม่ &#40;57&#41;
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPInput;
