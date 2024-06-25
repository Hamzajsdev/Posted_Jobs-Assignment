import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../common/Theme';
import arrow from '../assets/icons/arrow.png';
import box from '../assets/images/box.png';
import Star from '../assets/icons/Star.png';
import {useNavigation, useRoute} from '@react-navigation/native';
import RadioRange from './RadioRange';

const PreviewScreen = () => {
    const { width, height } = useWindowDimensions();
    const navigation = useNavigation();
    const route = useRoute();
    const { formData } = route.params;
  
    const handleSubmit = () => {
      navigation.navigate('HomeScreen');
    };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View style={[styles.container, { height: height / 1 }]}>
        <View style={[styles.header, { width: width / 1.1 }]}>
          <TouchableOpacity onPress={handleSubmit}>
            <Image source={arrow} resizeMode="cover" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Post a Job</Text>
        </View>
        <View style={styles.headerRadio}>
          <RadioRange />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.textField_section, { width: width / 1.1 }]}>
            <Text style={styles.main_heading}>
              This is a preview of what your job post will look like to job seekers.
            </Text>
            <View style={styles.box}>
              <View style={styles.header_box}>
                <Image source={box} />
                <View style={[styles.box_content, { width: width / 1.3 }]}>
                  <View>
                    <Text style={styles.box_heading}>{formData.jobTitle}</Text>
                    <Text style={styles.sub_heading}>Kickstarter, in Manchester</Text>
                    <View style={styles.tags_header}>
                      {formData.skills.map((skill, index) => (
                        <View key={index} style={styles.tags}>
                          <Text style={styles.tegs_text}>{skill}</Text>
                        </View>
                      ))}
                      <Text>Posted 6 hours ago</Text>
                    </View>
                  </View>
                  <View>
                    <Image source={Star} resizeMode="cover" style={{ marginRight: 100 }} />
                  </View>
                </View>
              </View>
              <View
                style={[
                  {
                    borderWidth: 1,
                    borderColor: theme.colors.lightGray,
                    marginVertical: 15,
                  },
                ]}
              ></View>
              <View>
                <Text style={styles.box_heading}>Job Description</Text>
                <Text style={styles.description}>{formData.description}</Text>
                <Text style={[styles.box_heading, { marginTop: 30 }]}>
                  Requirements
                </Text>
                <Text style={styles.description}>
                  Suspendisse dignissim neque sed lorem mattis tristique. Cras
                  viverra elit quis dolor sagittis, sed bibendum nisl
                  consectetur. Pellentesque at imperdiet ante. Phasellus id
                  felis eget leo scelerisque posuere quis sed est. Nam maximus
                  dui vel quam vehicula, eget scelerisque velit lacinia. Quisque
                  sodales eleifend urna. Fusce eu efficitur lectus, et fermentum
                  dui.
                </Text>
              </View>
            </View>
            <View style={[styles.horizontalLine, { width: width / 1 }]}></View>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('PostedJobs')}>
            <View style={[styles.btn, { width: width / 1.1 }]}>
              <Text style={styles.btn_text}>Payment</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PreviewScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  header: {
    alignSelf: 'center',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'medium',
  },
  headerRadio: {
    backgroundColor: theme.colors.lightGray,
    height: 82,
    marginTop: 20,
    justifyContent: 'center',
  },
  inner_headerRadio: {
    alignSelf: 'center',
  },
  circle: {
    width: '7%',
    height: 28,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: theme.colors.mdGray,
  },
  line: {
    width: '23%',
    borderColor: theme.colors.mdGray,
    borderWidth: 1,
    position: 'absolute',
    left: 24,
    top: 12,
  },
  textField_section: {
    alignSelf: 'center',
    marginTop: 20,
    gap: 20,
    marginBottom: 110,
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    backgroundColor: theme.colors.green,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 56,
  },
  btn_text: {
    color: theme.colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  main_heading: {
    color: theme.colors.mdGray,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  box: {
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    borderRadius: 10,
    padding: 10,
  },
  header_box: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  box_content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    marginLeft: -19,
    marginTop: 20,
  },
  box_heading: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    lineHeight: 20,
  },
  tags: {
    backgroundColor: theme.colors.shadeGray,
    padding: 4,
    height: 25,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tags_header: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 10,
  },
  tegs_text: {
    color: 'black',
    fontWeight: '500',
  },
  description: {
    color: theme.colors.mdGray,
    fontSize: 15,
    fontWeight: '400',
    marginTop: 10,
    lineHeight: 22,
  },
  sub_heading: {
    color: theme.colors.mdGray,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
    lineHeight: 20,
  },
});
