import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import ZipCodeScreen from "./screens/ZipCodeScreen";
import SwipeScreen from "./screens/SwipeScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="ZipCode"
          component={ZipCodeScreen}
          options={{
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Swipe"
          component={SwipeScreen}
          options={{
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
