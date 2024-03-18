import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TelaPrincipal from "./telas/telaHome";
import TelaCardapio from "./telas/telaCardapio";
import TelaConfigs from "./telas/telaSettings";
import Ionicon from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

//=========== app ==========

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

//========== consts & functions ==========

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
  },
  icons: {
    alignItems: "center",
    justifyContent: "center",
  },
  tabStyle: {
    backgroundColor: "#333",
  },
});

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Início"
      activeColor="#fcba03"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: "#222", borderTopWidth: 0 }}
    >
      <Tab.Screen
        name="Sabores"
        component={TelaCardapio}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicon
              name="pizza"
              size={23}
              style={styles.icons}
              color={focused ? "black" : "#808080"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Início"
        component={TelaPrincipal}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={23}
              style={styles.icons}
              color={focused ? "black" : "#808080"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={TelaConfigs}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicon
              name="settings"
              size={23}
              style={styles.icons}
              color={focused ? "black" : "#808080"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
