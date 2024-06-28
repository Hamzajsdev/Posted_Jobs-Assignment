import {
  View,
  Text,
  StatusBar,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../common/Theme';
import phone from '../../assets/images/HomeImg/phone.png';
import Wifi from '../../assets/images/HomeImg/wifi.png';
import cable from '../../assets/images/HomeImg/cable.png';
import data from '../../assets/images/HomeImg/data.png';
import solarcard from '../../assets/images/HomeImg/solarcard.png';
import battring from '../../assets/images/HomeImg/battring.png';
import tabler from '../../assets/images/HomeImg/tabler.png';
import carbon from '../../assets/images/HomeImg/carbon.png';
import Esim from '../../assets/images/HomeImg/Esim.png';
import electricity from '../../assets/images/HomeImg/electricity.png';
import iconamoon from '../../assets/images/HomeImg/iconamoon.png';
import lucide from '../../assets/images/HomeImg/lucide.png';

const Services = () => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={theme.colors.white}
      />
      <ScrollView>
        <View style={[styles.container, {width: width / 1.1}]}>
          <View style={styles.header}>
            <Text style={styles.main_heading}>Services</Text>
            <Text style={styles.sub_heading}>
              Explore our range of services designed to simplify your life.
            </Text>
          </View>
          <View style={[styles.card, {width: width / 1.1}]}>
          <View style={styles.row}>
            <View
              style={[styles.box1, {width: width / 3.3, height: height / 5.5}]}>
              <Image source={phone} style={styles.icons} resizeMode="cover" />
              <Text style={styles.box_text1}>Airtime</Text>
            </View>
            <View
              style={[styles.box2, {width: width / 3.3, height: height / 5.5}]}>
              <Image source={Wifi} style={styles.icons} resizeMode="cover" />
              <Text style={styles.box_text2}>Data</Text>
            </View>
            <View
              style={[styles.box3, {width: width / 3.3, height: height / 5.5}]}>
              <Image source={cable} style={styles.icons} resizeMode="cover" />
              <Text style={styles.box_text3}>Cable Tv</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[styles.box4, {width: width / 3.3, height: height / 5.5}]}>
              <Image source={data} style={styles.icons} resizeMode="cover" />
              <Text style={styles.box_text4}>Internet</Text>
            </View>
            <View
              style={[styles.box5, {width: width / 3.3, height: height / 5.5}]}>
              <Image
                source={solarcard}
                style={styles.icons}
                resizeMode="cover"
              />
              <Text style={styles.box_text5}>Data</Text>
            </View>
            <View
              style={[styles.box6, {width: width / 3.3, height: height / 5.5}]}>
              <Image
                source={battring}
                style={styles.icons}
                resizeMode="cover"
              />
              <Text style={styles.box_text6}>Betting</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[styles.box4, {width: width / 3.3, height: height / 5.5}]}>
              <Image
                source={tabler}
                style={styles.icons}
                resizeMode="stretch"
              />
              <Text style={styles.box_text7}>Airtime to {'\n'} cash</Text>
            </View>
            <View
              style={[styles.box5, {width: width / 3.3, height: height / 5.5}]}>
              <Image source={carbon} style={styles.icons} resizeMode="cover" />
              <Text style={styles.box_text8}>Book Flight</Text>
            </View>
            <View
              style={[styles.box6, {width: width / 3.3, height: height / 5.5}]}>
              <Image source={Esim} style={styles.icons} resizeMode="cover" />
              <Text style={styles.box_text9}>Betting</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View
              style={[
                styles.box4,
                {
                  width: width / 3.3,
                  height: height / 5.5,
                  borderBottomLeftRadius: 16,
                },
              ]}>
              <Image
                source={electricity}
                style={styles.icons}
                resizeMode="stretch"
              />
              <Text style={styles.box_text7}>Electricity</Text>
            </View>
            <View
              style={[styles.box5, {width: width / 3.3, height: height / 5.5}]}>
              <Image
                source={iconamoon}
                style={styles.icons}
                resizeMode="cover"
              />
              <Text style={styles.box_text11}>Giftcard</Text>
            </View>
            <View
              style={[
                styles.box6,
                {
                  width: width / 3.3,
                  height: height / 5.5,
                  borderBottomRightRadius: 16,
                },
              ]}>
              <Image source={lucide} style={styles.icons} resizeMode="cover" />
              <Text style={styles.box_text12}>Tickets</Text>
            </View>
          </View>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 30,
  },
  header: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_heading: {
    color: theme.colors.darkblack,
    fontSize: 22,
    fontWeight: '800',
  },
  sub_heading: {
    color: theme.colors.darkblack,
    fontSize: 14,
    textAlign: 'center',
  },
  card: {
    backgroundColor: theme.colors.white,
    alignSelf: 'center',
    borderRadius: 20,
    // marginTop: -130,
  },
  row: {
    flexDirection: 'row',
  },

  box_text1: {
    color: '#913AFF',
    fontSize: 16,
    fontWeight: '600',
  },
  icons: {
    width: 40,
  },
  box_text2: {
    color: '#221A81',
    fontSize: 16,
    fontWeight: '600',
  },
  box_text3: {
    color: '#FF8D3A',
    fontSize: 16,
    fontWeight: '600',
  },
  box1: {
    borderWidth: 2,
    borderRightColor: theme.colors.lightGray,
    borderTopColor: theme.colors.white,
    borderLeftColor: theme.colors.white,
    borderBottomColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderTopLeftRadius: 16,
  },
  box2: {
    borderWidth: 2,
    borderTopColor: theme.colors.white,
    borderLeftColor: theme.colors.lightGray,
    borderRightColor: theme.colors.lightGray,
    borderBottomColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  box3: {
    borderWidth: 2,
    borderBottomColor: theme.colors.lightGray,
    borderTopColor: theme.colors.white,
    borderLeftColor: theme.colors.lightGray,
    borderRightColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    borderTopRightRadius: 16,
  },

  box4: {
    borderWidth: 2,
    borderRightColor: theme.colors.lightGray,
    borderTopColor: theme.colors.lightGray,
    borderLeftColor: theme.colors.white,
    borderBottomColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  box5: {
    borderWidth: 2,
    borderTopColor: theme.colors.lightGray,
    borderLeftColor: theme.colors.lightGray,
    borderRightColor: theme.colors.lightGray,
    borderBottomColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  box6: {
    borderWidth: 2,
    borderBottomColor: theme.colors.lightGray,
    borderTopColor: theme.colors.lightGray,
    borderLeftColor: theme.colors.lightGray,
    borderRightColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  box_text4: {
    color: '#3A89FF',
    fontSize: 16,
    fontWeight: '600',
  },
  box_text5: {
    color: '#AC890E',
    fontSize: 16,
    fontWeight: '600',
  },
  box_text6: {
    color: '#143D7B',
    fontSize: 16,
    fontWeight: '600',
  },
  box_text7: {
    color: '#4D586B',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  box_text8: {
    color: '#602B89',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  box_text9: {
    color: '#0A7D46',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  box_text11: {
    color: theme.colors.red,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  box_text12: {
    color: '#009DCF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
