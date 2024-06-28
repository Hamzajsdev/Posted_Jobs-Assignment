import {
    Image,
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

const PhoneNumber = () => {
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
            <TouchableOpacity
              onPress={() => Navigation.navigate('ForgetPassword')}>
              <Image source={backErrow} />
            </TouchableOpacity>
          </View>
        </View>
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          style={styles.header_text}>
          <Text style={styles.heading}>Forget your Password?</Text>
          <Text style={styles.sub_heading}>
          Enter your Phone Number to recover
          </Text>
        </Animated.View>
        <View>
          <View style={{gap: 10, marginTop: 30}}>
            <Text
              style={styles.phone}>
              Phone Number
            </Text>
            <View>
              <TextInput 
              placeholder='+92367543561'
              placeholderTextColor={theme.colors.gradiantGray}
              keyboardType='Numeric'
              style={styles.textField}
              />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => Navigation.navigate('NewPassword')}>
            <View style={styles.btn_container}>
              <Text style={styles.btn_text}>Reset Password</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.login}>
            Remember your password?{' '}
            <Text style={{color: theme.colors.red}}> Login </Text>
          </Text>
        </View>
      </View>
    </View>
  </SafeAreaView>
  )
}

export default PhoneNumber

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
    textField:{
      borderWidth:1.5, borderColor:theme.colors.mdGray, borderRadius:12, padding:14
    },
    btn_container: {
      backgroundColor: theme.colors.red,
      alignItems: 'center',
      justifyContent: 'center',
      height: 55,
      borderRadius: 50,
      marginTop: 30,
    },
    btn_text: {
      color: theme.colors.white,
      fontSize: 18,
      fontWeight: '600',
    },
    login: {
      color: theme.colors.gradiantGray,
      fontSize: 15,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: 20,
    },
    phone:{
        color: theme.colors.gradiantGray,
        fontSize: 16,
        fontWeight: '600',
    }
  });