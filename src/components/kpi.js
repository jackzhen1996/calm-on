import React from "react";
import { View, Text, Button } from "react-native";
import { StackActions } from "@react-navigation/native";

const Kpi = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text>KPI Screen</Text>
      <Button
        title={"Nav to storytime"}
        onPress={() => {
          navigate("chatPlaceholder");
        }}
      ></Button>
    </View>
  );
};

export default Kpi
