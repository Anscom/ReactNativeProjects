import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./Task";
import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const AddTaskHandler = () => {
    Keyboard.dismiss();
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  const CompleteTask = (index) => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To Do List</Text>
      <View>
        {taskItem.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => CompleteTask()}>
              <Task Key={index} Text={item} whichOne={index + 1} />
            </TouchableOpacity>
          );
        })}
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wrapper}
      >
        <TextInput
          style={styles.YourInput}
          placeholder="Enter your task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => AddTaskHandler()}>
          <View style={styles.button}>
            <Text style={styles.buttontext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 32,
    marginTop: 50,
    marginHorizontal: 30,
  },
  wrapper: {
    position: "absolute",
    bottom: 70,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
  },
  YourInput: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    width: "70%",
    padding: 15,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 1,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontSize: 26,
  },
});
