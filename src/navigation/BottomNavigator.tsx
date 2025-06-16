import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/colors';

import { MainTabParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import BookingsScreen from '../screens/BookingsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const HomeIcon = ({ color }: { color: string }) => (
  <Icon name="home-outline" size={24} color={color} />
);
const ExploreIcon = ({ color }: { color: string }) => (
  <Icon name="search-outline" size={24} color={color} />
);
const BookingsIcon = ({ color }: { color: string }) => (
  <Icon name="calendar-clear-outline" size={24} color={color} />
);
const ProfileIcon = ({ color }: { color: string }) => (
  <Icon name="person-outline" size={24} color={color} />
);

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background.primary,
          borderTopWidth: 0.1,
          elevation: 5,
          shadowOpacity: 3,
        },
        tabBarActiveTintColor: colors.bottomNav.active,
        tabBarInactiveTintColor: colors.bottomNav.inactive,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ExploreIcon,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingsScreen}
        options={{
          tabBarIcon: BookingsIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
};
