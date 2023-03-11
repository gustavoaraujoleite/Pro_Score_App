/*
  SCREEN RESPONSIBLE FOR RENDERING THE APP'S WELCOME/PRESENTATION PAGE 
*/


import { useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { Text, View, Animated, StyleSheet } from "react-native";
import MainLogo from "../../../../assets/images/mainAppLogo.png";

export default function LogoPresentation() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  return (
    <View style={styles.mainContainer}>
      <Image source={MainLogo} />
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
        <Text style={styles.text}>PRO Score</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 4,
    fontSize: 26,
    fontFamily: 'Montserrat-500',
    marginLeft: 6
  },
});
