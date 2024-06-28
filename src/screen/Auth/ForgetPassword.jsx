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
import React, {useState} from 'react';
import {
  SafeAreaView,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import theme from '../../common/Theme';
import backErrow from '../../assets/icons/back-errow.png';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeInDown} from 'react-native-reanimated';
import RadioButton from '../../components/RadioButton';

const ForgetPassword = () => {
  const {width, height} = useWindowDimensions();
  const Navigation = useNavigation();
  const [selectedRadio, setSelectedRadio] = useState(null);
  const handleRadioPress = index => {
    setSelectedRadio(index);
  };

  const handleResetPasswordPress = () => {
    if (selectedRadio === 1) {
      Navigation.navigate('EmailAdress');
    } else if (selectedRadio === 2) {
      Navigation.navigate('PhoneNumber');
    }
  };

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
                onPress={() => Navigation.navigate('SecurityPin')}>
                <Image source={backErrow} />
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            entering={FadeInDown.delay(100).springify()}
            style={styles.header_text}>
            <Text style={styles.heading}>Forget your Password?</Text>
            <Text style={styles.sub_heading}>
              Choose how you want to recover your password
            </Text>
          </Animated.View>
          <View>
            <View style={styles.Radiocontainer}>
              <View style={styles.radioContainer}>
                <RadioButton
                  selected={selectedRadio === 1}
                  onPress={() => handleRadioPress(1)}
                />
                <Text style={styles.radioText}>Email Address</Text>
              </View>
              <View style={styles.radioContainer}>
                <RadioButton
                  selected={selectedRadio === 2}
                  onPress={() => handleRadioPress(2)}
                />
                <Text style={styles.radioText}>Phone Number</Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.button,
                  selectedRadio !== null && styles.btn_container,
                ]}
                disabled={selectedRadio === null} onPress={handleResetPasswordPress}>
                <Text style={styles.btn_text}>Reset Password</Text>
              </TouchableOpacity>
              <Text style={styles.login}>
              Remember your password? {' '}
                <Text style={{color: theme.colors.red}}> Login </Text></Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgetPassword;

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
  Radiocontainer: {
    marginTop:30
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap:25
  },
  radioText: {
    fontSize: 16,
    color: theme.colors.gradiantGray,
    fontWeight:'500'
  },
  button: {
    height: 55,
    backgroundColor: 'rgba(255, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop:20,
  },
  activeButton: {
    backgroundColor: theme.colors.red,
  },
  buttonText: {
    color: theme.colors.mdGray,
    fontSize: 18,
  },
  login: {
    color: theme.colors.gradiantGray,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginTop:25
  },
});
