import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { ThemeContext } from "../navigation/ThemeProvider";

export default function Spinner() {
    const { theme } = useContext(ThemeContext);

    return (
        <View
            style={[styles.container, { backgroundColor: theme.accentColor }]}
        >
            <ActivityIndicator size="large" color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
