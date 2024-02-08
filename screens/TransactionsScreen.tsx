import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TransactionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
    </View>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
  },
});
