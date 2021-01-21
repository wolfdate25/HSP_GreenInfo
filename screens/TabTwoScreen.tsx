import * as React from 'react';
import { Button, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import { CategoryList } from "../types";
import { StackScreenProps } from "@react-navigation/stack";

export default function TabTwoScreen({navigation}: StackScreenProps<CategoryList>) {
    return (
        <View style={styles.container}>
            {/*<Text style={styles.title}>Tab Two</Text>*/}
            {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
            {/*<CategoryNavigator />*/}
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('List', {type:'Cafe'})}>
                <Text style={styles.categoryText}>카페 용품</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}
                              onPress={() => navigation.navigate('List', {type: 'Delivery'})}>
                <Text style={styles.categoryText}>배달 용품</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('List', {
                type: 'Others'
            })}>
                <Text style={styles.categoryText}>기타</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%'
    },
    buttonContainer: {
        marginVertical: 5,
        width: '90%',
        fontSize: 50
    },
    categoryText: {
        fontSize: 30,
        textAlign: 'center'
    }
});
