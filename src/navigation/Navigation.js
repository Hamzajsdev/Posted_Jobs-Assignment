import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import PreviewScreen from '../screen/PreviewScreen';
import PostedJobs from '../screen/PostedJobs';
import Splash from '../screen/splash/Splash';
import Splash1 from '../screen/splash/Splash1';
import Splash2 from '../screen/splash/Splash2';
import Splash3 from '../screen/splash/Splash3';
import CreateAccount from '../screen/Auth/CreateAccount';
import Register from '../screen/Auth/Register';
import SecurityPin from '../screen/Auth/SecurityPin';
import ForgetPassword from '../screen/Auth/ForgetPassword';
import EmailAdress from '../screen/Auth/EmailAdress';
import PhoneNumber from '../screen/Auth/PhoneNumber';
import NewPassword from '../screen/Auth/NewPassword';
import SignIn from '../screen/Auth/SignIn';
import Biometrics from '../screen/Auth/Biometrics';
import KeepPosted from '../screen/Auth/KeepPosted';
import HomeMain from '../screen/Dashboard/HomeMain';
import BottomTabs from '../components/BottomTabs';


const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
         {/* <Stack.Screen name='HomeScreen' component={HomeScreen} />
         <Stack.Screen name='PreviewScreen' component={PreviewScreen} />
         <Stack.Screen name='PostedJobs' component={PostedJobs} /> */}


         {/* <Stack.Screen name='Splash' component={Splash} />
         <Stack.Screen name='Splash1' component={Splash1} />
         <Stack.Screen name='Splash2' component={Splash2} />
         <Stack.Screen name='Splash3' component={Splash3} />
         <Stack.Screen name='CreateAccount' component={CreateAccount} />
         <Stack.Screen name='Register' component={Register} />
         <Stack.Screen name='SecurityPin' component={SecurityPin} />
         <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
         <Stack.Screen name='EmailAdress' component={EmailAdress} />
         <Stack.Screen name='PhoneNumber' component={PhoneNumber} />
         <Stack.Screen name='NewPassword' component={NewPassword} />
         <Stack.Screen name='SignIn' component={SignIn} />
         <Stack.Screen name='Biometrics' component={Biometrics} />
         <Stack.Screen name='KeepPosted' component={KeepPosted} /> */}
         {/* <Stack.Screen name='HomeMain' component={HomeMain} /> */}
         <Stack.Screen name='BottomTabs' component={BottomTabs} />

          
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
