import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import splash1 from '../../assets/images/splash/splash1.png';
import card from '../../assets/images/splash/card.png';
import theme from '../../common/Theme';
import { useNavigation } from '@react-navigation/native';

const Splash1 = () => {
    const handleNext = () => {
        navigation.navigate('Splash2', { currentScreen: 1 });
      };
  const {width, height} = useWindowDimensions();
  const navigation=useNavigation()
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <View style={styles.container}>
        <Image
          source={splash1}
          resizeMode="stretch"
          style={{width: width / 1}}
        />
        <ImageBackground
          style={[styles.card]} source={card} resizeMode='stretch'>
           <View style={styles.dotContent}>
            <Text style={styles.dots1}></Text>
            <Text style={styles.dots2}></Text>
            <Text style={styles.dots2}></Text>
          </View>
          <View style={{width: width / 1.5}}>
            <Text style={styles.card_heading}>
              Zangapay ensures that you never miss a payment.
            </Text>
            <Text style={styles.card_subheading}>
              With the ease and speed of your hand, pay your utility bills for
              Internet, power, and other services.
            </Text>
          </View>
          <TouchableOpacity onPress={handleNext}>
          <View style={[styles.btn, {width: width / 1.2}]}>
            <Text style={styles.btnText}>
              Next <Text style={{fontSize: 26}}>→</Text>{' '}
            </Text>
          </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaProvider>
  );
};

export default Splash1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    padding: 15,
    alignItems: 'center',
    gap: 20,
  },
  card_heading: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 24,
  },
  card_subheading: {
    color: theme.colors.white,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 19,
  },
  btn: {
    backgroundColor: theme.colors.red,
    height: 48,
    borderRadius: 50,
    // justifyContent:"center",
    alignItems: 'center',
  },
  btnText: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '700',
  },
  dotContent:{
    gap: 8, flexDirection: 'row'
  },
  dots1:{
    width: 30, height: 8, backgroundColor: theme.colors.red, borderRadius: 12
  },
  dots2:{
    width: 30, height: 8, backgroundColor: theme.colors.white, borderRadius: 12 
  }
});
