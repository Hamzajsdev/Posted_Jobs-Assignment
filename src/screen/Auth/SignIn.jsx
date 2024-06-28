import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import theme from '../../common/Theme';
import backErrow from '../../assets/icons/back-errow.png';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SignIn = () => {
  const {width, height} = useWindowDimensions();
  const Navigation = useNavigation();
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
              <TouchableOpacity onPress={() => Navigation.navigate('NewPassword')}>
                <Image source={backErrow} />
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            entering={FadeInDown.delay(100).springify()}
            style={styles.header_text}>
            <Text style={styles.heading}>Sign In</Text>
            <Text style={styles.sub_heading}>
              Log in to your account to continue
            </Text>
          </Animated.View>
        </View>
        <View style={[styles.card, {height: height / 1}]}>
          <View style={styles.textField}>
            <Fontisto name="email" size={20} color="#900" />
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={theme.colors.gradiantGray}
              style={{flex: 1}}
            />
          </View>
          <View style={styles.textField}>
            <Fontisto name="locked" size={20} color="#900" />
            <TextInput
              placeholder="**************"
              placeholderTextColor={theme.colors.gradiantGray}
              secureTextEntry={true}
            />
          </View>
          <Text style={styles.forget}>Forget Password</Text>
          <TouchableOpacity onPress={() => Navigation.navigate('Biometrics')}>
            <View style={styles.btn_container}>
              <Text style={styles.btn_text}>Login</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.signUp_text}>
            <Text style={styles.login}>
              Don’t have an account?{' '}
              <Text style={{color: theme.colors.red}}> Sign in Here</Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

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
  forget: {
    color: theme.colors.red,
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '600',
  },
});
