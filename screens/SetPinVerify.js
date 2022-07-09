import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from "../lib/tailwind.js";
import { useNavigation } from "@react-navigation/native";

const SetPinVerify = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw``}>
      {/* Top secion */}
      <View style={tw`flex self-center h-60% top-25%`}>
        <View style={tw`flex items-center`}>
          <Text style={tw`text-base text-black`}>ตั้งรหัส PIN CODE</Text>
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

        {/* 3 by 4 circle buttons with numbers in them, having number 4 highlighted */}
        <View style={tw`flex flex-row flex-wrap justify-center mt-10`}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0].map((number) => {
            switch (number) {
              case 4:
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("TouchIDSetup");
                    }}
                    key={number}
                  >
                    <View
                      style={tw`w-5rem h-5rem mx-1rem mb-1rem rounded-full border-[#979797] border-2 items-center justify-center bg-blue`}
                      key={number}
                    >
                      <Text style={tw`text-2xl text-white`} key={number}>
                        {number}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              case "":
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("SetPinVerify");
                    }}
                    key={number}
                  >
                    <View
                      style={tw`w-5rem h-5rem mx-1rem mb-1rem`}
                      key={number}
                    >
                      <Text style={tw`text-2xl text-black`} key={number}>
                        {number}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              default:
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("SetPinVerify");
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
            }
          })}
          <View style={tw`w-5rem h-5rem mx-1rem my-1rem self-center`}>
            <Image
              source={require("../assets/delete.png")}
              style={tw`w-3.5rem h-2.5rem self-center right-11% top-11%`}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetPinVerify;
