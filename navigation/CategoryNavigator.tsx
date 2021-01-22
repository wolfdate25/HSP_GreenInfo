import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import { Text, View } from '../components/Themed';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryList } from "../types";
import CategoryScreen from "../screens/CategoryScreen";
import TabTwoScreen from "../screens/TabTwoScreen";

const Stack = createStackNavigator<CategoryList>();

export default function CategoryNavigator() {
    return (

        <Stack.Navigator
            initialRouteName="Category"
        >
            <Stack.Screen name="Category" component={TabTwoScreen} options={{headerTitle:'카테고리'}}/>
            <Stack.Screen name="List" component={CategoryScreen} options={({route}) => ({title: route.params.type})}/>
        </Stack.Navigator>
    );
}
