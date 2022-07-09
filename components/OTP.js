import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import tw from '../lib/tailwind.js'

const OTP = () => {
    return (
        <OTPInputView
        style={tw`flex items-center self-center w-85% h-15rem`}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={tw`border-0 border-b-2 border-grey text-2xl text-black`}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled = {(code) => {
            console.log(`Code is ${code}, you are good to go!`)
        }}
    />
      )
}

export default OTP

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,

    },
  
    underlineStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  });