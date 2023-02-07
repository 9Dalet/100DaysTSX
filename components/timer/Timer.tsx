import React from 'react';
import { Alert } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import Animated, { FadeInUp, withRepeat } from 'react-native-reanimated';

interface Props {
  isPLaying: boolean,
  duration: number,
  key: number
}

const Timer: React.FC<Props> = ({isPLaying, duration, key}) => {
  return (
    <CountdownCircleTimer
      isPlaying={isPLaying}
      duration={duration}
      key={key}
      colors={['#710193', '#a32cc4', '#9866c5', '#a55ee5', '#af69ee', '#b660cf', '#e39ff6', '#FFFFFF']}
      colorsTime={[30,25, 20, 15, 10, 5, 3, 0]}
      trailColor={'#212121'}
      size={350}
      rotation={"counterclockwise"}
      onComplete={() => (Alert.alert("Time's up"))}>
      {({ remainingTime, color }) => <Animated.Text entering={FadeInUp.duration(950)} style={{ fontSize: 100, color: color }}>{remainingTime}</Animated.Text>}
    </CountdownCircleTimer>
  )
}

export default Timer;

