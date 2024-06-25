import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import PreviewScreen from '../screen/PreviewScreen';
import PostedJobs from '../screen/PostedJobs';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
         <Stack.Screen name='HomeScreen' component={HomeScreen} />
         <Stack.Screen name='PreviewScreen' component={PreviewScreen} />
         <Stack.Screen name='PostedJobs' component={PostedJobs} />
         {/* <Stack.Screen name='Dummy' component={Dummy} /> */}
          
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
