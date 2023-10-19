import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../colors";
import { NavigationContainer } from "@react-navigation/native";
import Initial from "../screens/Initial";
import Home from "../screens/Home";
import Agenda from "../screens/Agenda";
import Register from "../screens/Register";
import Login from "../screens/Login";
import MinhaConta from "../screens/UserProfile";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Initial">
        <Tab.Screen
          name="Initial"
          component={Initial}
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarActiveTintColor: colors.ColorRed,
            tabBarInactiveTintColor: "#000",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Agenda"
          component={Agenda}
          options={{
            headerShown: false,
            tabBarActiveTintColor: colors.ColorRed,
            tabBarInactiveTintColor: "#000",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="date-range" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            tabBarActiveTintColor: colors.ColorRed,
            tabBarInactiveTintColor: "#000",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="login" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Minha Conta"
          component={MinhaConta}
          options={{
            headerShown: false,
            tabBarActiveTintColor: colors.ColorRed,
            tabBarInactiveTintColor: "#000",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
