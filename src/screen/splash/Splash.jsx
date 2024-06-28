import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import {SafeAreaProvider, SafeAreaView, initialWindowMetrics} from 'react-native-safe-area-context';
import theme from '../../common/Theme';
import splash from '../../assets/images/splash/splash.png';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const {width, height} = useWindowDimensions();
  const navigation=useNavigation()

  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Splash1');
    }, 2000);
  })
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.red}
      />
      <View style={[styles.container, {height: height / 1}]}>
        <Image
          source={splash}
          resizeMode="stretch"
          style={{width: width / 1}}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
