import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ProductItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>El precio es: Ars {item.price}</Text>
                    <Text style={styles.details}>El color es {item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    breadItem: {
        padding: 20,
        margin: 10,
        borderRadius: 3,
        backgroundColor: "#ccc",
    },
    title: {
        fontSize: 20,
        fontFamily: "Tillana",
    },
    details: {
        fontSize: 18,
    },
});