import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'RoomDetails'>;

const RoomDetailsScreen = ({ route }: Props) => {
  const { roomId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Room Details Screen</Text>
      <Text style={styles.subText}>Room ID: {roomId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.text.primary,
    fontSize: 20,
    marginBottom: 10,
  },
  subText: {
    color: colors.text.muted,
    fontSize: 16,
  },
});

export default RoomDetailsScreen; 