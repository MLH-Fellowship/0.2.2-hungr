import * as React from "react";
import { SafeAreaView, StyleSheet, Image, Text } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import GetDirections from '../components/GetDirections';

export default function MatchScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#FD297B", "#FF5864", "#FF655B"]}
        style={styles.gradient}
      >
        <Image
          source={require('../assets/match.png')}
          style={styles.matchHeader}
        />
        <Text
          style={styles.matchText}
        >
          All your friends want to eat here!
        </Text>
        <Image
          source={require('../assets/Food1.jpg')}
          style={styles.matchImage}
        />
        <GetDirections />
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  matchHeader: {
    marginTop: 133,
  },
  matchText: {
    color: "#fff",
    marginTop: 48,
  },
  matchImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
    marginTop: 48,
  },
  gradient: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});