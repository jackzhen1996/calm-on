import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const CheckInExplain = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.tmp}>
      <Text style={styles.txt}>[Feeling Image]</Text>
      <Text style={styles.txt}>Today I'm feeling [feeling]!</Text>
      <Text style={styles.txt}>
        Tell me why you're feeling [feeling]...(optional)
      </Text>
      <TextInput></TextInput>
      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={() => navigate("Home")} />
        <Button title="Submit" onPress={() => navigate("Home")} />
      </View>
    </View>
  );
};

export default CheckInExplain;

const styles = StyleSheet.create({
  tmp: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center", // secondary axis
  },
  txt: {
    color: "black",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});