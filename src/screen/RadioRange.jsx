import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import theme from '../common/Theme';


const { width } = Dimensions.get('window');
const RadioRange = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Job Detail', 'Post Detail', 'Preview', 'Payment'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity
              style={[
                styles.circle,
                { backgroundColor: currentStep === index ? theme.colors.green : theme.colors.mdGray },
              ]}
              onPress={() => setCurrentStep(index)}
            >
              {currentStep === index && <View style={styles.innerCircle} />}
            </TouchableOpacity>
            {index < steps.length - 1 && (
              <View
                style={[
                  styles.line,
                  { backgroundColor: currentStep > index ? theme.colors.mdGray : 'lightgray' },
                ]}
              />
            )}
          </React.Fragment>
        ))}
      </View>
      <View style={styles.labelsContainer}>
        {steps.map((step, index) => (
          <Text
            key={index}
            style={[
              styles.label,
              { color: currentStep === index ? theme.colors.green : 'gray' },
            ]}
          >
            {step}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',

  },
  innerCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.green,
  },
  line: {
    width: (width - 48 * 4) / 3,
    height: 2,
    backgroundColor: theme.colors.mdGray,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 8,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default RadioRange;
