import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.realText}>
        <Text>{props.Text}</Text>
      </View>
      <View style={styles.Circle}>
        <Text style={styles.CircleText}>{props.whichOne}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginHorizontal: 15,
    borderRadius: 15,
    borderWidth: 1,
  },
  Circle: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 15,
  },
  CircleText: {
    paddingLeft: 5,
  },
});

export default Task;
