import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import ZipCodeInput from "../components/ZipCodeInput";
import CreateRoom from "../components/CreateRoom";

export default function ZipCodeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FD297B", "#FF5864", "#FF655B"]}
        style={styles.gradient}
      >
        <Header title={header.title}/>
        <ZipCodeInput />
        <CreateRoom />
      </LinearGradient>
    </View>
  );
}

const header = {
  "title": {
    "line1": "Where do",
    "line2": "you want",
    "line3": "to eat?"
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
