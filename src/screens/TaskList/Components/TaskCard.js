import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { CheckBox } from "react-native-elements";
import Colors from "../../../theming/colors";

import { updateIsCompleted } from "../../utils/firebase";
import { priorityColor } from "../../utils/priority";

import moment from "moment";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ripple from "react-native-material-ripple";

export default function TaskCard({ taskItem, navigation }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.taskListView}>
                <View style={styles.checkbox}>
                    <CheckBox
                        center
                        checkedColor={Colors.accentColor}
                        uncheckedColor={Colors.accentColor}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={taskItem.isCompleted}
                        onPress={() =>
                            updateIsCompleted(taskItem.isCompleted, taskItem.id)
                        }
                        containerStyle={styles.checkBoxStyle}
                    />
                </View>
                <Text
                    style={[
                        styles.taskItemTitle,
                        taskItem.isCompleted && {
                            textDecorationLine: "line-through",
                        },
                    ]}
                >
                    {taskItem.taskTitle}
                </Text>
                <Text
                    style={[
                        styles.taskItemDate,
                        taskItem.isCompleted && {
                            textDecorationLine: "line-through",
                        },
                    ]}
                >
                    {taskItem.isUpdated && "Updated on "}
                    {moment(taskItem.createdAt.toDate()).calendar()}
                </Text>
                <View style={styles.priorityMarker}>
                    <View
                        style={[
                            styles.taskPriority,
                            priorityColor(taskItem.priorityIs),
                        ]}
                    />
                </View>
                <View style={styles.buttonWrapper3}>
                    <TouchableHighlight
                        style={[{ opacity: 1 }, styles.button2]}
                        onPress={() =>
                            navigation.navigate("TaskItem", taskItem)
                        }
                        activeOpacity={0.6}
                        underlayColor="#DDDDDD"
                    >
                        <MaterialCommunityIcons
                            name="chevron-right"
                            color={Colors.accentColor}
                            size={30}
                            style={styles.icon}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {},
    taskListView: {
        flex: 1,
        marginVertical: 5,
        backgroundColor: "#fff",
        marginHorizontal: 7,
        borderRadius: 15,
        paddingVertical: 9,
        elevation: 3,
    },
    taskItemTitle: {
        paddingTop: 10,
        marginHorizontal: 80,
        fontSize: 18,
        fontWeight: "700",
        color: "#484848",
    },
    taskItemDate: {
        marginBottom: 10,
        marginHorizontal: 80,
        fontSize: 14,
        color: "#767676",
    },
    priorityMarker: {
        position: "absolute",
        left: 65,
        top: 17,
    },

    buttonWrapper3: {
        position: "absolute",
        right: 25,
        top: 10,
    },
    button2: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 60,
        height: 60,
    },
    icon: {
        marginRight: -2,
        marginTop: -2,
    },
    checkbox: {
        position: "absolute",
        left: 8,
        top: 14,
    },

    taskPriority: {
        marginTop: 5,
        width: 4,
        height: 40,
        borderRadius: 9999,
        borderWidth: 1,
    },
    checkBoxStyle: {
        borderRadius: 10,
        backgroundColor: "transparent",
        borderWidth: 0,
    },
});
