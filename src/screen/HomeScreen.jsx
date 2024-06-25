import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import theme from '../common/Theme';
import arrow from '../assets/icons/arrow.png';
import plus from '../assets/icons/plus.png';
import {useNavigation} from '@react-navigation/native';
import RadioRange from './RadioRange';
import {
  educationLevels,
  experienceLevels,
  initialSkills,
  jobTypes,
} from '../components/MockData';
import {Picker} from '@react-native-picker/picker';

const HomeScreen = () => {
  const {width, height} = useWindowDimensions();
  const Navigation = useNavigation();
  const [jobTitle, setJobTitle] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState(initialSkills);
  const [newSkill, setNewSkill] = useState(initialSkills);
  const [showSkills, setShowSkills] = useState(false);
  const [jobType, setJobType] = useState(jobTypes[0]);
  const [education, setEducation] = useState(educationLevels[0]);
  const [experience, setExperience] = useState(experienceLevels[0]);

  const handleAddSkill = () => {
    setShowSkills(!showSkills);
  };
  const handleSelectSkill = skill => {
    setNewSkill([...newSkill, skill]);
    setSkills(skills.filter(s => s !== skill));
    setShowSkills(false);
  };
  const handleTextChange = text => {
    const selectedSkills = text
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);
    setNewSkill(selectedSkills);
  };

  const handlePress = () => {
    const formData = {
      jobTitle,
      description,
      skills,
      jobType,
      education,
      experience,
    };
    Navigation.navigate('PreviewScreen', {formData});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View style={[styles.container, {height: height / 1}]}>
        <View style={[styles.header, {width: width / 1.1}]}>
          <Image source={arrow} resizeMode="cover" />
          <Text style={styles.headerText}>Post a Job</Text>
        </View>
        <View style={styles.headerRadio}>
          <RadioRange />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.textField_section, {width: width / 1.1}]}>
            <View>
              <Text style={styles.heading}>Job Title</Text>
              <TextInput
                placeholder="Enter Job Title"
                value={jobTitle}
                onChangeText={setJobTitle}
                style={styles.textfield}
                placeholderTextColor={theme.colors.mdGray}
              />
            </View>
            <View>
              <Text style={styles.heading}>Description</Text>
              <TextInput
                multiline={true}
                numberOfLines={15}
                placeholder="Your Job Description"
                value={description}
                onChangeText={setDescription}
                style={[styles.textfield, {textAlignVertical: 'top'}]}
                placeholderTextColor={theme.colors.mdGray}
              />
            </View>

            <View>
              <Text style={styles.heading}>Skills</Text>
              <View style={styles.skillsContainer}>
                <TextInput
                  placeholder="Type Skills"
                  value={newSkill.join(', ')}
                  onChangeText={handleTextChange}
                  style={[styles.textfield, {flex: 1}]}
                  placeholderTextColor={'#999'}
                />
              </View>
              <TouchableOpacity onPress={handleAddSkill}>
                <View style={styles.AddSkill}>
                  <Image
                    source={plus}
                    resizeMode="cover"
                    style={{position: 'absolute'}}
                  />
                </View>
              </TouchableOpacity>
              {showSkills && (
                <View style={styles.selectedSkillsContainer}>
                  {skills.map((skill, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.skillBadge}
                      onPress={() => handleSelectSkill(skill)}>
                      <Text style={styles.skillText}>{skill}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>

            <View>
              <Text style={styles.heading}>Job Type</Text>
              <View style={styles.textfieldPicker}>
                <Picker
                  selectedValue={jobType}
                  onValueChange={itemValue => setJobType(itemValue)}>
                  {jobTypes.map((type, index) => (
                    <Picker.Item
                      key={index}
                      label={type}
                      value={type}
                      style={styles.picckerText}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View>
              <Text style={styles.heading}>Education</Text>
              <View style={styles.textfieldPicker}>
                <Picker
                  selectedValue={education}
                  onValueChange={itemValue => setEducation(itemValue)}>
                  {educationLevels.map((level, index) => (
                    <Picker.Item
                      key={index}
                      label={level}
                      value={level}
                      style={styles.picckerText}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View>
              <Text style={styles.heading}>Experience Level</Text>
              <View style={styles.textfieldPicker}>
                <Picker
                  selectedValue={experience}
                  onValueChange={itemValue => setExperience(itemValue)}>
                  {experienceLevels.map((level, index) => (
                    <Picker.Item
                      key={index}
                      label={level}
                      value={level}
                      style={styles.picckerText}
                    />
                  ))}
                </Picker>
              </View>
            </View>
            <View style={[styles.horizontalLine, {width: width / 1}]}></View>
          </View>
          <TouchableOpacity onPress={handlePress}>
            <View style={[styles.btn, {width: width / 1.1}]}>
              <Text style={styles.btn_text}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
  textfield: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: 10,
    marginTop: 8,
    padding: 12,
    fontWeight: 'bold',
  },
  textfieldPicker: {
    backgroundColor: theme.colors.lightGray,
    borderRadius: 10,
    marginTop: 8,
    fontWeight: 'bold',
  },
  picckerText: {
    fontSize: 15,
    color: theme.colors.mdGray,
    fontWeight: '900',
  },
  heading: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btn: {
    position: 'absolute',
    bottom: 20,
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
  Add_inner: {
    backgroundColor: theme.colors.green,
    width: '9%',
    height: 35,
    position: 'absolute',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    top: 16,
    right: 10,
  },
  plus: {
    position: 'absolute',
    right: 27,
    top: 22,
  },
  errow_down: {
    position: 'absolute',
    top: 24,
    right: 10,
    width: 30,
  },
  skill: {
    backgroundColor: 'lightgray',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  horizontalLine: {
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    marginLeft: -19,
    marginTop: 20,
  },
  AddSkill: {
    backgroundColor: theme.colors.green,
    width: 35,
    height: 35,
    position: 'absolute',
    right: 10,
    top: -44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  // -----------------------------
  skillsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plus: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  selectedSkillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  skillBadge: {
    backgroundColor: '#eee',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 5,
    marginBottom: 5,
  },
  skillText: {
    fontSize: 14,
    color: '#333',
  },
});
