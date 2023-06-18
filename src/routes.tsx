import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FontAwesome, AntDesign } from "@expo/vector-icons";
import HomeScreen from "./pages/HomeScreen";
import Bills from "./pages/Bills";
import Form from "./pages/Form";
import Transition from "./pages/Transition";
import Calendar from "./pages/Calendar";
import CalendarPage from "./pages/Calendar";
import Tickets from "./pages/Tickets";
import Pay from "./pages/Pay";
import { Unpay } from "./pages/Unpay";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const TopTab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <Tab.Navigator tabBarPosition="top">
      <Tab.Screen
        name="Pay"
        component={Pay}
        options={{
          tabBarAccessibilityLabel: "Pay",
          tabBarLabel: "Pagos",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="barcode" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Unpay"
        component={Unpay}
        options={{
          tabBarAccessibilityLabel: "Unpay",
          tabBarLabel: "A Pagar",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="barcode" size={24} color="gray" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarPage}
        options={{
          tabBarLabel: "Calendar",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Bills"
        component={Bills}
        options={{
          tabBarLabel: "Boletos",
          tabBarLabelStyle: {
            color: "#000",
          },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="barcode" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Form"
          component={Form}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transition"
          component={Transition}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tickets"
          component={MyTopTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
