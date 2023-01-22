import { Button, StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { addItem } from "../store/actions/cart.action";

const ProductDetailScreen = ({ navigation }) => {
  const product = useSelector((state) => state.products.selected);
  const dispatch = useDispatch();


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const numeroRandom = getRandomInt(1, 100)




  const handlerAddItemCart = () => {
    console.log("Articulo agregado al carrito")
    alert("El articulo ha sido agregad con exito")
    navigation.navigate("Categories")
  }



  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Image source={{ uri: `https://picsum.photos/id/${numeroRandom}/200/300` }}
          style={styles.images} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Ars $ {product.price}</Text>
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
  images: {
    width: 200, 
    height: 200,
    borderRadius: 25
  }

});