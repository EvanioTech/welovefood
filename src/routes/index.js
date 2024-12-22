import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/home";
import { Menu } from "../pages/menu";

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
             name="Home" 
             component={Home}
             options={
                {headerShown: false}
             }
             />
            <Stack.Screen 
            name="Menu" 
            component={Menu}
            options={
                {headerShown: false}
             }
            />
        </Stack.Navigator>
    )
}

export {Routes};