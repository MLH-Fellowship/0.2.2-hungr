import React from "react";
import { useFonts } from "@use-expo/font";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";

state = {
  fontsLoaded: false,
};


const Header = (props) => {
  let [fontsLoaded] = useFonts({
    "Raleway-Regular": require("../assets/fonts/Raleway-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{props.title.line1}</Text>
        <Text style={styles.text}>{props.title.line2}</Text>
        <Text style={styles.text}>{props.title.line3}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
    paddingBottom:100,
  },
  text: {
    fontFamily: "Raleway-Regular",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: 56,
    textAlign: "center",
    color: "#fff",
  },
});

export default Header;
