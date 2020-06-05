import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";

const JoinRoom = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Join a room"
        type="clear"
        titleStyle={{
          color: "white",
          fontSize: 30,
        }}
        buttonStyle={styles.buttonStyle}
      />
      <Input
        placeholder="Room Pin"
        containerStyle={styles.Input}
        enablesReturnKeyAutomatically={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  buttonStyle: {
    backgroundColor: "transparent",
    borderRadius: 60,
    flex: 1,
    height: 10,
    width: 300,
  },
  Input: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "transparent",
    // borderColor: "#fff",
    // borderRadius: 60,
    // height: 100,
    // width: 300,
  },
});

export default JoinRoom;
