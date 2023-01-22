import { FlatList, View, StyleSheet } from 'react-native'
import React from 'react'
import GridItem from '../components/GridItem';
import { useDispatch, useSelector, connect } from 'react-redux';
import { selectedCategory } from '../store/actions/category.action';



export default function CategoriesScreen({ navigation }) {
  //const categories = CATEGORIES
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();


  const handleSelectedCategory = (item) => {
    dispatch(selectedCategory(item.id));
    navigation.navigate("Products", {
      name: item.title,
    });
  };

  const renderGridItem = ({ item }) => (
    <View style = {styles.container}>
      <GridItem item={item} onSelected={handleSelectedCategory} />
    </View>
  );

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={renderGridItem}
      numColums={1} />
  );
}

connect()(CategoriesScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});