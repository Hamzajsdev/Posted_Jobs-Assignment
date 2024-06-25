import { View, Text, StatusBar, StyleSheet, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../common/Theme'
import circle from '../assets/images/circle.png'

const PostedJobs = () => {
    const { width, height } = useWindowDimensions()
  return (
   <SafeAreaView>
    <StatusBar barStyle={'dark-content'} backgroundColor={theme.colors.green} />
    <View style={[styles.container,{height:height/1}]}>
        <Image source={circle}  />
        <Text style={styles.heading}>Your Job is Posted!</Text>
        <Text style={[styles.sub_heading,{width:width/1.2}]}>Congratulations! Your job has been successfully posted and is now visible to potential candidates. Good luck in your recruitment process!</Text>
        <View style={[styles.btn,{width:width/2}]}>
            <Text style={styles.btn_text}>Manage Jobs</Text>
        </View>
    </View>
   </SafeAreaView>
  )
}

export default PostedJobs

const styles=StyleSheet.create({
    container:{
        backgroundColor:theme.colors.green,
        alignItems:'center',
        justifyContent:"center",
        gap:15
    },
    heading:{
        color:theme.colors.white,
        fontSize:22,
        fontWeight:'700'
    },
    sub_heading:{
        color:theme.colors.white,
        textAlign:'center',
        fontSize:20
    },
    btn:{
        backgroundColor:theme.colors.white,
        height:58,
        borderRadius:12,
        justifyContent:"center",
        alignItems:'center'
    },
    btn_text:{
        color:theme.colors.green,
        fontSize:18,
        fontWeight:'bold'
    }
})