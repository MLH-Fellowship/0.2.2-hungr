import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import JoinRoom from "../components/JoinRoom";
import CreateRoom from "../components/CreateRoom";

export default function SwipeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FD297B", "#FF5864", "#FF655B"]}
        style={styles.gradient}
      >
        <Header title={header.title}/>
        <JoinRoom />
        <CreateRoom navigation={navigation} />
      </LinearGradient>
    </View>
  );
}

const header = {
  "title": {
    "line1": "Swipe",
    "line2": "Match",
    "line3": "Eat"
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
