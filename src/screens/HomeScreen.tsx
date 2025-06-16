import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { width } = Dimensions.get('window');

const featuredRooms = [
  {
    id: '1',
    name: 'Royal Suite',
    location: 'Dubai',
    price: '$2,500',
    image: 'https://example.com/royal-suite.jpg', // Replace with actual image URL
  },
  {
    id: '2',
    name: 'Presidential Villa',
    location: 'Maldives',
    price: '$3,200',
    image: 'https://example.com/presidential-villa.jpg', // Replace with actual image URL
  },
  // Add more rooms as needed
];

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <LinearGradient
      colors={colors.background.gradient}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Luxury Suites</Text>
          <Text style={styles.heroSubtitle}>Experience Unparalleled Elegance</Text>
        </View>

        {/* Featured Rooms */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Suites</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.featuredScroll}
          >
            {featuredRooms.map((room) => (
              <TouchableOpacity
                key={room.id}
                style={styles.roomCard}
                onPress={() => navigation.navigate('RoomDetails', { roomId: room.id })}
              >
                <Image
                  source={{ uri: room.image }}
                  style={styles.roomImage}
                  resizeMode="cover"
                />
                <LinearGradient
                  colors={['transparent', 'rgba(0,0,0,0.8)']}
                  style={styles.roomGradient}
                >
                  <Text style={styles.roomName}>{room.name}</Text>
                  <Text style={styles.roomLocation}>{room.location}</Text>
                  <Text style={styles.roomPrice}>{room.price}/night</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* VIP Services */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>VIP Services</Text>
          <View style={styles.servicesGrid}>
            <TouchableOpacity
              style={styles.serviceCard}
              onPress={() => navigation.navigate('Chat')}
            >
              <Text style={styles.serviceTitle}>Concierge</Text>
              <Text style={styles.serviceDescription}>24/7 Personal Assistant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.serviceCard}>
              <Text style={styles.serviceTitle}>Private Chef</Text>
              <Text style={styles.serviceDescription}>Exclusive Dining Experience</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    padding: 20,
    paddingTop: 40,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: colors.text.primary,
    opacity: 0.8,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 16,
  },
  featuredScroll: {
    marginHorizontal: -20,
  },
  roomCard: {
    width: width * 0.8,
    height: 400,
    marginHorizontal: 10,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.background.secondary,
  },
  roomImage: {
    width: '100%',
    height: '100%',
  },
  roomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  roomName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text.primary,
    marginBottom: 4,
  },
  roomLocation: {
    fontSize: 16,
    color: colors.text.muted,
    marginBottom: 4,
  },
  roomPrice: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: 'bold',
  },
  servicesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  serviceCard: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    padding: 20,
    borderRadius: 12,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: colors.border.secondary,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 14,
    color: colors.text.muted,
  },
});

export default HomeScreen; 