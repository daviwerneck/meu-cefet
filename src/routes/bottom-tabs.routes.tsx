import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Inicio } from '../screens/Inicio';
import Horarios from '../screens/Horarios';
import Ajuda from '../screens/Ajuda';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
//const {Navigator, Screen} = createBottomTabNavigator(); - desestruturação

export default function BottomNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Início'>
                <Tab.Screen
                    name='Horários'
                    component={Horarios}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="calendar" size={size} color={color} />
                        ),
                    }} />

                <Tab.Screen
                    name='Início'
                    component={Inicio}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }} />

                <Tab.Screen
                    name='Ajuda'
                    component={Ajuda}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="help" size={size} color={color} />
                        ),
                    }} />

            </Tab.Navigator>

        </NavigationContainer>
    );
}
