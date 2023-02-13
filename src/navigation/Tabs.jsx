import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Box, Icon, Text } from "native-base";
import { MaterialCommunityIcons, AntDesign, Entypo } from "@expo/vector-icons";

import Home from "../pages/Home";
import Account from "../pages/Account";
import Prescription from "../pages/Prescription";

const Tab = createBottomTabNavigator();

function Tabs() {
  const Item = ({ focused, name, icon }) => (
    <Box alignItems="center" justifyContent="center">
      <Icon
        as={MaterialCommunityIcons}
        name={icon}
        color={focused ? "primary.700" : "gray.400"}
        size={6}
      />
      <Text color={focused ? "primary.700" : "gray.400"}>{name}</Text>
    </Box>
  );

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
        },
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Prescription"
        component={Prescription}
        options={{
          tabBarIcon: ({ focused }) => (
            <Item
              focused={focused}
              name="Prescrição"
              icon="clipboard-edit-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Item focused={focused} name="Formulário" icon="form-select" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ focused }) => (
            <Item focused={focused} name="Conta" icon="account-cog-outline" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
