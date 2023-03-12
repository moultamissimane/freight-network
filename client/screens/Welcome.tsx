import { Animated, Image, StyleSheet, Text, View } from "react-native";
// @ts-ignore
import React, { useEffect, useState } from "react";
// @ts-ignore
import Rent from "../assets/images/Rent.png";
import { NavigationProp } from "@react-navigation/native";
import { RootStackScreenProps } from '../types';

interface Props {
  navigation: NavigationProp<Record<string, unknown>>;
}
// @ts-ignore
export default function Welcome({
  navigation,
}: RootStackScreenProps<"Welcome">) {
  const fadeIn = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 7000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    // @ts-ignore
    <Animated.View style={styles.container}>
      {/* @ts-ignore */}
      <Image style={styles.patternbg} source={Rent} />

      {/* <View style={styles.container1}>
        <Text style={styles.welcome}>Welcome to E-scoooter</Text>
      </View> */}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 200,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
  },
  welcome: {
    fontSize: 50,
    color: "#270329",
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    fontFamily: "quicksand-regular",
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
});
