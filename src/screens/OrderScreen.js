import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CART from '../data/cart'
import OrderItem from '../components/OrderItem';
import { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { getOrders, deleteOrder } from '../store/actions/order.action';

export default function OrdersScreen() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list)
  const items = CART;


  useEffect(() => {
    console.log(orders)
    dispatch(getOrders())
  }, [])


  const handlerDeleteItem = (id) => {
    dispatch(deleteOrder(id))
    console.log("Elminiado")
  }

  const renderItem = ({ item }) => (
    <OrderItem item={item} onDelete={handlerDeleteItem} />
  );


  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  )
}

const styles = StyleSheet.create({})

connect()(OrdersScreen)