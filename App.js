

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './source/screens/Home';
import Login from './source/screens/Login';
import Signup from './source/screens/Signup';
import Profilepic from './source/screens/Profilepic';
import EditProfile from './source/screens/EditProfile';
import Editemail from './source/screens/Editemail';
import Editmobile from './source/screens/Editmobile';
import Editname from './source/screens/Editname';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Profilepic" component={Profilepic} />
        <Stack.Screen name="Editname" component={Editname}  options={{headerShown: false}}/>
        <Stack.Screen name="Editmobile" component={Editmobile}  options={{headerShown: false}}/>
        <Stack.Screen name="Editemail" component={Editemail}  options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;