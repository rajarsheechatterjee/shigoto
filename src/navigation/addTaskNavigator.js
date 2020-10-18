import React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../theming/colors";

import AddTasks from "../screens/AddTask/AddTask";

const Stack = createStackNavigator();

export default function StackNavigator({ navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Add Task"
                component={AddTasks}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.accentColor,
                    },
                    headerTintColor: "white",
                    headerLeft: false,
                }}
            />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 16,
    },
});
