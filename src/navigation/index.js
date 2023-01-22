import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import BottomTabNavigator from "./BottomTabNavigator";
import AuthNavigator from "./AuthNavigator";

export default function MainNavigator() {

  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>
      {userId
        ? <BottomTabNavigator />
        : <AuthNavigator />
      }
    </NavigationContainer>
  );
};