import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Initial from "../screens/Initial";
import Home from "../screens/Home";
import Agenda from "../screens/Agenda";
import Register from "../screens/Register";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Inital">
        <Tab.Screen
          name="Initial"
          component={Initial}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#418B64",
            tabBarInactiveTintColor: "#000",
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#418B64",
            tabBarInactiveTintColor: "#000",
          }}
        />
        <Tab.Screen
          name="Agenda"
          component={Agenda}
          options={{
            headerShown: false,
            tabBarActiveTintColor: "#418B64",
            tabBarInactiveTintColor: "#000",
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
            tabBarButton: () => null,
            tabBarStyle: { display: "none" },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
