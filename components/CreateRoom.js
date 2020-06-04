import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

const CreateRoom = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Create a room"
        type="outline"
        titleStyle={{
          color: "white",
          fontSize: 30,
        }}
        buttonStyle={styles.buttonStyle}
        onPress={() => props.navigation.navigate('ZipCode')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "transparent",
    borderColor: "#fff",
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
});

export default CreateRoom;
