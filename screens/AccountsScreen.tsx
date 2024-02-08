import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AccountsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Accounts</Text>
    </View>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
  },
});
