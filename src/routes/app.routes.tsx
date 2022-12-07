import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Pokemon } from "../screens/Pokemon";
import { Stats } from "../screens/Stats";
import { Evolution } from "../screens/Evolution";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Screen name="Home" component={Home} />
      <Screen name="Pokemon" component={Pokemon} />
      <Screen name="Stats" component={Stats} />
      <Screen name="Evolution" component={Evolution} />
    </Navigator>
  );
}
