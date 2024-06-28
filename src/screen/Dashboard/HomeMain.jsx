import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../../common/Theme';
import Notification from '../../assets/images/HomeImg/Notification.png';
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
import netflix from '../../assets/images/HomeImg/netflix.png';

const Home = () => {
  const {width, height} = useWindowDimensions();
  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={theme.colors.red}
        barStyle={'light-content'}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, {height: height / 2.2}]}>
          <View style={[styles.header, {width: width / 1.1}]}>
            <View style={styles.header_container}>
              <View style={{gap: 4}}>
                <Text style={styles.heading}>Account Balance</Text>
                <Text style={styles.sub_heading}>#23,000.00</Text>
              </View>
              <View style={styles.notification}>
                <Image source={Notification} />
              </View>
            </View>
            <Text style={styles.main_subHeading}>Ayomide Emmanuel</Text>
          </View>
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
        <View style={[styles.headerContent, {width: width / 1.1}]}>
          <View style={styles.inner_header}>
            <Text style={styles.heder_text}>Recent Activity</Text>
            <Text style={styles.see}>See All</Text>
          </View>
          <View style={styles.inner_header}>
            <View style={styles.activity}>
              <View style={styles.membership}>
                <Image source={netflix} />
              </View>
              <View>
                <Text style={styles.membership_text}>Netflix Membership</Text>
                <Text style={styles.inner_textHeader}>
                  15.02.2021 ~ 1 :24 pm
                </Text>
              </View>
            </View>
            <Text style={styles.heder_text}>- # 29.90</Text>
          </View>
          <Text style={styles.borderLine}></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.red,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    alignSelf: 'center',
    marginTop: 50,
  },
  row: {
    flexDirection: 'row',
  },
  heading: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '400',
  },
  sub_heading: {
    color: theme.colors.white,
    fontSize: 35,
    fontWeight: '600',
  },
  notification: {
    width: 55,
    height: 55,
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main_subHeading: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 18,
  },
  card: {
    backgroundColor: theme.colors.white,
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: -130,
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
  box_text3: {
    color: '#FF8D3A',
    fontSize: 16,
    fontWeight: '600',
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
  headerContent: {
    alignSelf: 'center',
    marginTop: 20,
    gap: 25,
    marginBottom: 20,
  },
  inner_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heder_text: {
    color: theme.colors.gradiantGray,
    fontSize: 16,
    fontWeight: '600',
  },
  see: {
    color: theme.colors.red,
    fontSize: 15,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  activity: {
    flexDirection: 'row',
    gap: 30,
    alignItems: 'center',
  },
  membership: {
    borderWidth: 0.2,
    borderColor: theme.colors.mdGray,
    backgroundColor: theme.colors.white,
    width: 45,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  membership_text: {
    fontSize: 19,
    color: theme.colors.gradiantGray,
    fontWeight: '700',
  },
  inner_textHeader: {
    color: theme.colors.gradiantGray,
    fontSize: 14,
  },
  borderLine: {
    borderWidth: 0.5,
    borderColor: theme.colors.mdGray,
    height: 0.5,
  },
});
