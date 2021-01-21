import React from "react";
import { View, Text } from "../components/Themed";
import { StackScreenProps } from "@react-navigation/stack";
import { CategoryList } from "../types";

export default class CategoryScreen extends React.Component<any, any> {
    render() {
        const {route, navigation} = this.props;
        const type = route.params?.type
        // navigation.setOptions({title:type});

        return(
            <View>
                <Text>{type}</Text>
            </View>
        )
    }
}