import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import tw from "../lib/tailwind.js";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={tw`flex-1 content-center bg-offwhite`}>
      <View style={tw`flex items-start top-30% w-100%`}>
        <View style={tw`px-5 pt-2 w-100%`}>
          {/* Username Input */}
          <TextInput
            style={tw`flex text-base pl-1 h-2rem`}
            placeholder="ชื่อผู้ใช้งาน"
          />
          <View style={tw`bg-[#E4E4E4] w-100% self-center h-1px mt-1`} />
        </View>
        {/* Password Input */}
        <View style={tw`px-5 pt-10 w-100%`}>
          <TextInput
            style={tw`flex text-base pl-1 h-2rem`}
            placeholder="รหัสผ่าน"
            secureTextEntry={true}
          />
          <View style={tw`bg-[#E4E4E4] w-98% self-center h-1px mt-1`} />
        </View>

        <View style={tw`w-100% pt-5 items-start flex-col`}>
          <View style={tw`px-10 pt-7 flex-row`}>
            <Text style={tw`text-textgrey absolute pl-2.5rem text-base`}>
              บันทึกการเข้าสู่ระบบ
            </Text>
            <View
              style={tw`border-2 border-[#B7B7B7] rounded-sm w-1rem h-1rem absolute left-5 top-0.33rem`}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
            style={tw`flex justify-end items-end right-5 absolute top-5`}
          >
            <Text style={tw`text-textgrey text-base`}>ลืมรหัสผ่าน?</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Button section */}
      <View style={tw`flex top-42%`}>
        {/* Log in button  */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login2OTP");
          }}
          style={tw`bg-blue py-5 w-90% items-center self-center mb-7 rounded-lg border-2 border-blue`}
        >
          <Text style={tw`text-white text-xl font-bold`}>เข้าสู่ระบบ</Text>
        </TouchableOpacity>

        {/* Non-user section */}
        <View style={tw`flex`}>
          <View style={tw`h-10`}>
            <View style={tw`flex self-center absolute`}>
              <Text style={tw`text-textgrey text-base opacity-70% `}>
                ไม่มีบัญชีผู้ใช้
              </Text>
            </View>
            {/* line */}
            <View
              style={tw`bg-[#E4E4E4] w-32% self-start left-5 top-2 h-1px mt-1 absolute`}
            />
            {/* line */}
            <View
              style={tw`bg-[#E4E4E4] w-32% self-end right-5 top-2 h-1px mt-1 absolute`}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TermsOfService");
            }}
            style={tw`py-5 w-90% items-center self-center rounded-lg border-2 border-[#7A7A7A]`}
          >
            <Text style={tw`text-blue text-xl font-bold`}>
              เปิดบัญชีเพื่อลงทะเบียนผู้ใช้
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
