import React from "react";
import { View, Text } from "../components/Themed";
import { StackScreenProps } from "@react-navigation/stack";
import { CategoryList } from "../types";
import { organizations } from "../components/products";
import { FlatList, Image, StyleSheet } from "react-native";

export default class CategoryScreen extends React.Component<any, any> {

    render() {
        const {route, navigation} = this.props;
        const type: string = route.params?.type;
        // navigation.setOptions({title:type});
        const products: Array<Item> = [];
        let index = 0;

        organizations.forEach(company => {
            company.products.forEach(product => {
                if (product.category.includes(type)) {
                    const item = {
                        id: index,
                        company: company.companyName,
                        ...product,
                    };
                    products.push(item);
                    index = index + 1;
                }
            });
        });

        return (
            <View>
                <FlatList
                    data={products}
                    renderItem={({item}) => <ItemComponent productName={item.productName} category={item.category}
                                                           summary={item.summary} description={item.description}
                                                           id={item.id} images={item.images} company={item.company}/>}
                    keyExtractor={(item) =>
                        item.id.toString()
                    }
                />
            </View>
        );
    }
}

type Item = {
    id: number;
    company: string;
    productName: string;
    category: Array<string>;
    summary: string;
    description: string;
    images: Array<string>;
}

function ItemComponent({productName, company, category, summary, description, images}: Item) {
    return (
        <View style={styles.listItem}>
            <Image
                style={styles.thumbnail}
                source={{
                    uri: `https://i.imgur.com/${images[0]}.jpg`,
                }}
            />
            <View style={styles.titleList}>
                <Text style={styles.title}>{productName}</Text>
                <Text style={styles.companyTitle}>{company}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    thumbnail: {
        width: 70,
        height: 70,
    },
    listItem: {
        borderWidth: 1,
        marginVertical: 1,
        width: '100%',
        flexDirection: 'row',
    },
    titleList: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginHorizontal: 5,
        marginVertical: 3,
    },
    title: {
        fontSize: 25,
        marginTop: 5,
    },
    companyTitle: {
        fontSize: 13,
    },
});