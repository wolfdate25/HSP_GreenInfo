import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import HomeScreen from '../components/HomeScreen';
import { Text, View } from '../components/Themed';


export default class TabThreeScreen extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {text: '텍스트를 입력하세요', textChanged: false};
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <TextInput style={styles.searchText} clearTextOnFocus={true}
                               onChangeText={(text) => this.setState({text})}
                               onFocus={() => {
                                   if (!this.state.textChanged) {
                                       this.setState({text: '', textChanged: true});
                                   }
                               }}
                               value={this.state.text}/>
                </View>
                <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    separator: {
        height: 2,
        width: '100%'
    },
    search: {
        margin: 10,
        marginLeft: 20,
        width: '90%'
    },
    searchText: {
        fontSize: 25,
        // borderWidth: 1,
        padding: 3,
    }
});
