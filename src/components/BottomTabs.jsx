import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Home from '../screen/Dashboard/HomeMain';
import Services from '../screen/Dashboard/Services';
import Wallet from '../screen/Dashboard/Wallet';
import Profile from '../screen/Dashboard/Profile';
import theme from '../common/Theme';

const BottomTabs = () => {
  const {height} = useWindowDimensions();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconImage;
          let bottomImg;
          let containerStyle;

          if (route.name === 'Home') {
            iconImage = require('../assets/icons/Home.png');
          } else if (route.name === 'Services') {
            iconImage = require('../assets/icons/Chart.png');
          } else if (route.name === 'Wallet') {
            iconImage = require('../assets/icons/Wallet.png');
          } else if (route.name === 'Profile') {
            iconImage = require('../assets/icons/Profile.png');
          }

          const tintColor = focused ? theme.colors.red : theme.colors.mdGray;
          return (
            <View>
              <View style={styles.icons}>
                <Image
                  source={iconImage}
                  style={[styles.imgIcons, {tintColor}]}
                />
              </View>
              <View style={[styles.containerStyle, {containerStyle}]}>
                <Image source={bottomImg} style={styles.bottomImg} />
              </View>
            </View>
          );
        },

        tabBarStyle: {
          backgroundColor: theme.colors.white,
          height: height / 10,
        },
        tabBarLabel: ({focused}) => {
          const routeName = route.name;
          const textColor = focused ? theme.colors.red : theme.colors.mdGray;

          switch (routeName) {
            case 'Home':
            case 'Services':
            case 'Wallet':
            case 'Profile':
              return (
                <Text style={[styles.textBottom, {color: textColor}]}>
                  {routeName}
                </Text>
              );
            default:
              return null;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Services" component={Services} />
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgIcons: {
    width: 25,
    height: 25,
    bottom: -20,
  },
  containerStyle: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 12,
  },
  bottomImg: {
    width: 84,
    height: 28,
  },
  textBottom: {
    fontSize: 14,
    fontWeight: '600',
    bottom: 10,
  },
});
