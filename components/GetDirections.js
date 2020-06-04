import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

const GetDirections = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FD297B", "#FF5864", "#FF655B"]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}
      >
        <Button
          title="Get Directions"
          type="clear"
          titleStyle={{
            color: "white",
            fontSize: 30,
          }}
          buttonStyle={styles.buttonStyle}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "transparent",
    borderRadius: 60,
    height: 50,
    width: 300,
  },
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  gradient: {
    borderRadius: 60,
  }
});

export default GetDirections;