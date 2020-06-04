import * as React from "react";
import { SafeAreaView, StyleSheet, Image } from 'react-native'
import GetDirections from '../components/GetDirections';

export default function MatchScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/match.png')} />
      <Image source={props.foodImage}/>
      <GetDirections/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  matchHeader: {

  },
  matchImage: {

  },
  directionsButton: {

  }
});