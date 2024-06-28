import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
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
import fingerprint from '../../assets/images/fingerprint.png';

const Biometrics = () => {
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
              <TouchableOpacity onPress={() => Navigation.navigate('SignIn')}>
                <Image source={backErrow} />
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            entering={FadeInDown.delay(100).springify()}
            style={styles.header_text}>
            <Text style={styles.heading}>Set Biometrics</Text>
            <Text style={styles.sub_heading}>
              Protect you account with biometric. Set up facial recognition or
              fingerprint authentication for faster and more secure access to
              your Zangapay account.
            </Text>
          </Animated.View>
        </View>
        <View style={[styles.card, {height: height / 1.4}]}>
          <View style={styles.fingerprint}>
            <Image source={fingerprint} />
          </View>
          <View style={{flex:1, gap:10}}>
            <TouchableOpacity
              onPress={() => Navigation.navigate('KeepPosted')}>
              <View style={styles.btn_container}>
                <Text style={styles.btn_text}>Continue</Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.skip}>Skip for now</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Biometrics;

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
    marginTop: 60,
  },
  btn_text: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  skip:{
    color:theme.colors.red, textAlign:"center", fontWeight:'600'
  },
  fingerprint:{
    flex: 1, alignItems: 'center', marginTop: 30
  }
});
