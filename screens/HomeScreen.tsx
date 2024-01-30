import { Button, StyleSheet, View } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const HomeScreen = ({ navigation }: RouterProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => navigation.navigate("Transactions")}
        title="Transactions"
      />
      <Button
        onPress={() => navigation.navigate("Accounts")}
        title="Accounts"
      />
      <Button
        onPress={() => navigation.navigate("Insights")}
        title="Insights"
      />
      <Button onPress={() => navigation.navigate("Profile")} title="Profile" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
