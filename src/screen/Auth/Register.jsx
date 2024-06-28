import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, { useRef } from 'react';
import {
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import theme from '../../common/Theme';
import backErrow from '../../assets/icons/back-errow.png';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = () => {
  const {width, height} = useWindowDimensions();
  const Navigation = useNavigation();

  return (
    <SafeAreaView initialMetrics={initialWindowMetrics}>
      <StatusBar
        backgroundColor={theme.colors.white}
        barStyle={'dark-content'}
      />
      <View style={[styles.container, {height: height / 1}]}>
        <KeyboardAwareScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}>
          <View style={{width: width / 1.1, alignSelf: 'center'}}>
            <View style={[styles.header, {width: width / 1.1}]}>
              <View style={styles.box_content}>
                <TouchableOpacity
                  onPress={() => Navigation.navigate('CreateAccount')}>
                  <Image source={backErrow} />
                </TouchableOpacity>
              </View>
              <Text style={styles.register}>Register</Text>
              <Text></Text>
            </View>
            <Animated.View
              entering={FadeInDown.delay(100).springify()}
              style={styles.header_text}>
              <Text style={styles.heading}>Get Started</Text>
              <Text style={styles.sub_heading}>
                Create an account so you can pay your bills and purchase top-ups
                faster.
              </Text>
            </Animated.View>
          </View>
          <View style={[styles.card, {height: height / 1}]}>
            <View style={styles.textField}>
              <FontAwesome name="user-o" size={20} color="#900" />
              <TextInput
                placeholder="Full Name"
                placeholderTextColor={theme.colors.gradiantGray}
              />
            </View>
            <View style={styles.textField}>
              <Fontisto name="email" size={20} color="#900" />
              <TextInput
                placeholder="Email"
                placeholderTextColor={theme.colors.gradiantGray}
              />
            </View>
            <View style={styles.textField}>
              <Fontisto name="phone" size={20} color="#900" />
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor={theme.colors.gradiantGray}
                keyboardType="Numeric"
              />
            </View>
            <View style={styles.textField}>
              <Fontisto name="locked" size={20} color="#900" />
              <TextInput
                placeholder="Password"
                placeholderTextColor={theme.colors.gradiantGray}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.textField}>
              <Fontisto name="locked" size={20} color="#900" />
              <TextInput
                placeholder="Confirm Password"
                placeholderTextColor={theme.colors.gradiantGray}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              onPress={() => Navigation.navigate('SecurityPin')}>
              <View style={styles.btn_container}>
                <Text style={styles.btn_text}>Create Account</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.signUp_text}>
              <Text style={styles.login}>
                Already have an account?{' '}
                <Text style={{color: theme.colors.red}}>Sign in Here</Text>
              </Text>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
    marginBottom: -150,
  },
  btn_container: {
    backgroundColor: theme.colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    borderRadius: 50,
    marginTop: 20,
  },
  btn_text: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  signUp_text: {
    alignSelf: 'center',
  },
  login: {
    color: theme.colors.mdGray,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  textField: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: theme.colors.gradiantGray,
    borderRadius: 12,
    paddingLeft: 12,
    padding: 2,
  },
});
