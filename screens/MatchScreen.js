import React from 'React';
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