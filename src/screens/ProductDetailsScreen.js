import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { addItem } from "../store/actions/cart.action";

const ProductDetailScreen = () => {
  const product = useSelector((state) => state.products.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(product);
  }, []);


  const handlerAddItemCart = () => {
    console.log("Articulo agregado al carrito")
    //dispatch(addItem(product));
  }



  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <View style={styles.button}>
          <Button title="Agregar al carrito" onPress={handlerAddItemCart} />
        </View>
      </View>
    </View>
  );
};

export default connect()(ProductDetailScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  screen: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 20,
  },
  price: {
    fontSize: 40,
    fontFamily: "Tillana",
  },
  button: {
    marginTop: 15,
  },
});