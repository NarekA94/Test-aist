import React, {Fragment} from 'react';
import {HomeScreen, TransactionScreen} from '../screens';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <Fragment>
      <Tab.Navigator
        backBehavior="history"
        shifting={true}
        activeColor="#000"
        inactiveColor="#a1aab8"
        barStyle={{backgroundColor: '#fff'}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Transaction"
          component={TransactionScreen}
          options={{
            tabBarLabel: 'History',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="clock-time-three-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </Fragment>
  );
};
