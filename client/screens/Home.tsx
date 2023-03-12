import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Map from "../components/Map";
export default function Home() {
 
  return (
    <View style={styles.page}>
      <Map />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {   
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
