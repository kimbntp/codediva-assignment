import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import React from "react";
import tw from "../lib/tailwind.js";
import { useNavigation } from "@react-navigation/native";

const SelectLanguage = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <SafeAreaView style={tw`flex-1 content-center bg-offwhite`}>
      {/* Terms of Service Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={tw`bg-white flex-1 h-80% absolute w-100% bottom-0 rounded-2xl shadow-lg`}
        >
          <View style={tw`flex items-start px-5`}>
            <View style={tw`flex px-2.5 pt-5 top-4%`}>
              <Image
                style={tw`w-10 h-10 justify-start`}
                source={require("../assets/TOS.png")}
              />

              <View style={tw`left-10 px-6 pt-2 absolute top-4`}>
                <Text style={tw`font-bold text-2xl`}>เงื่อนไขการใช้บริการ</Text>
              </View>
            </View>
            <View style={tw`bg-[#E4E4E4] w-95% self-center h-1px mt-7`} />
          </View>

          <View style={tw`flex bottom-5 absolute self-center h-5% w-100%`}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <View
                style={tw`bg-white py-10px w-43% items-center absolute bottom-10.71% left-5% rounded-lg border-2 border-blue`}
              >
                <Text style={tw`text-blue text-base font-bold`}>ปฎิเสธ</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
                setModalVisible(false);
              }}
            >
              <View
                style={tw`bg-blue py-10px w-43% items-center absolute bottom-10.71% right-5% rounded-lg border-2 border-blue`}
              >
                <Text style={tw`text-white text-base font-bold`}>ยอมรับ</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* The Screen */}
      <View style={tw`flex items-start top-32%`}>
        <View style={tw`px-5 pt-2`}>
          <Text style={tw`font-bold text-2xl fontFamily:sans-Roboto`}>ยินดีต้อนรับ</Text>
        </View>

        <View style={tw`px-5`}>
          <Text style={tw`text-xl `}>กรุณาเลือกภาษา</Text>
        </View>
      </View>

      <View style={tw`flex-1 top-44%`}>
        <View
          style={tw`bg-blue py-4 mb-7 w-90% items-center self-center rounded-lg border-2 border-blue`}
        >
          <Text style={tw`text-white text-xl font-bold`}>English</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <View
            style={tw`bg-blue py-4 w-90% items-center self-center rounded-lg border-2 border-blue`}
          >
            <Text style={tw`text-white text-xl font-bold`}>ไทย</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectLanguage;
