import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useRef} from 'react';
import {
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import theme from '../../common/Theme';
import backErrow from '../../assets/icons/back-errow.png';
import {useNavigation} from '@react-navigation/native';
import OTPTextView from 'react-native-otp-textinput';
import Animated, { FadeInDown } from 'react-native-reanimated';

const SecurityPin = () => {
  const {width, height} = useWindowDimensions();
  const Navigation = useNavigation();
  const otpInput = useRef(null);

  return (
    <SafeAreaView initialMetrics={initialWindowMetrics}>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <View style={[styles.container, {height: height / 1}]}>
        <View style={{width: width / 1.1, alignSelf: 'center'}}>
          <View style={[styles.header, {width: width / 1.1}]}>
            <View style={styles.box_content}>
              <TouchableOpacity onPress={() => Navigation.navigate('Register')}>
                <Image source={backErrow} />
              </TouchableOpacity>
            </View>
            <Text style={styles.register}>Security Pin</Text>
            <Text></Text>
          </View>
          <Animated.View  entering={FadeInDown.delay(100).springify()} style={styles.header_text}>
            <Text style={styles.heading}>Create your security pin</Text>
            <Text style={styles.sub_heading}>
              We will require this pin to process your Transactions
            </Text>
          </Animated.View>
        </View>
        <View style={[styles.card, {height: height / 1.4}]}>
          <View style={{flex: 1}}>
            <OTPTextView
              ref={otpInput}
              handleTextChange={otp => (otp)}
              textInputStyle={{borderWidth: 2, borderRadius: 10}}
              inputCount={5}
              keyboardType="numeric"
              tintColor='red'
            />
            <Text style={styles.OTP}>Resend OTP</Text>
          </View>
          <TouchableOpacity onPress={() => Navigation.navigate('ForgetPassword')}>
            <View style={styles.btn_container}>
              <Text style={styles.btn_text}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecurityPin;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightGray,
  },
  header: {
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box_content: {
    borderWidth: 1.5,
    borderColor: theme.colors.mdGray,
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    color: '#4D586B',
    fontSize: 19,
    fontWeight: '600',
  },
  header_text: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    gap: 10,
  },
  heading: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginLeft: 15,
  },
  sub_heading: {
    color: '#4D586B',
    fontSize: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 30,
    padding: 30,
    marginTop: 40,
    gap: 15,
    elevation: 5,
    marginBottom: -60,
  },
  btn_container: {
    backgroundColor: theme.colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 50,
    marginTop: 20,
    marginBottom:10
  },
  btn_text: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  OTP:{
    textAlign:'center', marginTop:20, color:theme.colors.red, fontWeight:'700', fontSize:16
  }
});
