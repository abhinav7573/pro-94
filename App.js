import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DailyForecast from "./screens/DailyForecast";
export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const switchNavigator = createSwitchNavigator({
  HomeScreen: { screen: HomeScreen },
  DailyForecast: { screen: DailyForecast },
});

const AppContainer = createAppContainer(switchNavigator);
