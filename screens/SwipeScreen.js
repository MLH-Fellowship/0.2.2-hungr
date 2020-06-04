import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/Card';
import { SwipeScreenPics } from '../components/constants/Pics';

class SwipeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Swiper
          cards={SwipeScreenPics}
          renderCard={Card}
          infinite // keep looping cards infinitely
          backgroundColor="white"
          cardHorizontalMargin={0}
          stackSize={2} // number of cards shown in background
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
})

export default SwipeScreen
