import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";

const GetDirections = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Get Directions"
        type="clear"
        titleStyle={{
          color: "white",
          fontSize: 30,
        }}
        buttonStyle={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "transparent",
    borderColor: "#fff",
    borderWidth: 1,
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
  Input: {
    flex: 1,
    alignItems: "center",
  },
});

export default GetDirections;