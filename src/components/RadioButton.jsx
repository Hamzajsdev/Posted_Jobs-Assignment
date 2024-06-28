import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../common/Theme'

const RadioButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity
    style={[styles.radioButton, selected && styles.selectedRadioButton]}
    onPress={onPress}
  >
  </TouchableOpacity>
  )
}

export default RadioButton

const styles=StyleSheet.create({
    radioButton: {
        height: 25,
        width: 25,
        borderRadius: 100,
        borderWidth: 1.2,
        borderColor: theme.colors.gradiantGray,
      
      },
      selectedRadioButton: {
        backgroundColor: theme.colors.red,
      },
    
})