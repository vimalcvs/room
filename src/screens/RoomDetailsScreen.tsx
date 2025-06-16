import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const RoomDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Room Details Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
});

export default RoomDetailsScreen;
