import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TabThreeScreen from '../screens/TabThreeScreen';
import { BottomTabParamList, TabOneParamList, TabThreeParamList, TabTwoParamList } from '../types';
import CategoryNavigator from "./CategoryNavigator";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
            <BottomTab.Screen
                name="Home"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({color}) => <IonIcon name="home" color={color}/>
                }}
            />
            <BottomTab.Screen
                name="Category"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({color}) => <IonIcon name="list" color={color}/>
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={TabThreeNavigator}
                options={{
                    tabBarIcon: ({color}) => <IonIcon name="search" color={color}/>
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
/*function AntIcon( name: string, color: string ) {
    return <AntIcon name={name} size={30} color={color} style={{ marginBottom: -3 }} />;
    //return <AntDesign size={24}/>;
}*/
function IonIcon( props:{name: string, color: string }) {
    return <Ionicons size={24} style={{marginBottom:-5}} {...props} />
    //return <Ionicons name={name} size={24} color="black"/>;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{headerTitle: 'Home'}}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={CategoryNavigator}
                options={{ headerShown: false }}
            />
        </TabTwoStack.Navigator>
    );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
    return (
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen
                name="TabThreeScreen"
                component={TabThreeScreen}
                options={{headerTitle: 'Search'}}
            />
        </TabThreeStack.Navigator>
    );
}
