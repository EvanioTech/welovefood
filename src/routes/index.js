import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/home";
import { Menu } from "../pages/menu";
import { Drinks } from "../pages/bebidas";
import { Pizzas } from "../pages/pizza";
import { Sobremesas } from "../pages/sobremesas";
import { Sandwiches } from "../pages/hamburgues";
import { Kalzones } from "../pages/kalzones";





const Stack = createStackNavigator();

const Routes = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{ headerShown: false }} // Define como padrão
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="Drinks" component={Drinks} />
            <Stack.Screen name="Pizzas" component={Pizzas} />
            <Stack.Screen name="Kalzones" component={Kalzones} />
            <Stack.Screen name="Sandwiches" component={Sandwiches} />
            <Stack.Screen name="Sobremesas" component={Sobremesas} />
        </Stack.Navigator>
    );
};



export {Routes};