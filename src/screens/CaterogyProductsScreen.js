import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux';
import { useEffect } from 'react';
import ProductItem from '../components/ProductItem';

//actions
import { filteredProduct, selectProduct } from '../store/actions/product.action';

export default function CategoryProductScreen({ navigation }) {
  const dispatch = useDispatch();
  const categoryProducts = useSelector((state) => state.products.filteredProduct)
  const category = useSelector((state) => state.categories.selected);


  useEffect(() => {
    // console.log(category.id)
    dispatch(filteredProduct(category.id));
  }, []);


  const handleSelectedCategory = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate("Details", {
      name: item.name,
    });
  };

  const renderBreadItem = ({ item }) => (
    <ProductItem item={item} onSelected={handleSelectedCategory} />
  );

  return (
    <FlatList
      data={categoryProducts}
      keyExtractor={(item) => item.id}
      renderItem={renderBreadItem}
    />
  );
};
connect()(CategoryProductScreen);