import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Products from './pages/Products';

//config screens
const Stack = createStackNavigator();

 function Routes(){
     return(
        <NavigationContainer> 
            <Stack.Navigator>
                <Stack.Screen 
                 name="Home"
                 component={Home}
                 options={{ headerShown: false }}            
                />
                <Stack.Screen
                name="Products"
                component={Products}
                />
             </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;