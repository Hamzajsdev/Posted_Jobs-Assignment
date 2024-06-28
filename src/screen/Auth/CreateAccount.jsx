import {
  View,
  Text,
  StatusBar,
  useWindowDimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import logo from '../../assets/icons/logo.png';
import Animated, {FadeInDown} from 'react-native-reanimated';
import theme from '../../common/Theme';
import { useNavigation } from '@react-navigation/native';

const CreateAccount = () => {
  const {width} = useWindowDimensions();
  const Navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <View style={[styles.container, {width: width / 1.1}]}>
        <Animated.View entering={FadeInDown.delay(100).springify()}>
          <Image source={logo} resizeMode="stretch" />
        </Animated.View>
        <Animated.View
          entering={FadeInDown.delay(200).springify()}
          style={styles.heading}>
          <Text style={styles.main_heading}>Welcome to Zangapay!</Text>
          <Text style={styles.subHeading}>
            Simplify your bill, subscription, and betting payments by becoming a
            member of the Zangapay now. Please create a new account or log in to
            your existing one to get started.
          </Text>
        </Animated.View>
        <View style={{width: width / 1.1, gap: 15}}>
        <TouchableOpacity onPress={()=>Navigation.navigate('Register')}>
          <View style={styles.btn_container}>
            <Text style={styles.btn_text}>Create Account</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.btn2_container}>
            <Text style={styles.btn2_text}>Sign In</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
    gap: 55,
  },
  heading: {
    gap: 10,
  },
  main_heading: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '600',
  },
  subHeading: {
    color: theme.colors.gradiantGray,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  btn_container: {
    backgroundColor: theme.colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 50,
  },
  btn_text: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  btn2_container: {
    borderWidth: 1.5,
    borderColor: theme.colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 50,
  },
  btn2_text: {
    color: theme.colors.red,
    fontSize: 18,
    fontWeight: '600',
  },
});
