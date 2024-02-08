import { StyleSheet, Text, View } from "react-native";
import { Button } from "@ui-kitten/components";
import { FIREBASE_AUTH } from "../firebase/config";
import React from "react";

const ProfileScreen = () => {
  const handleSignOut = () => {
    FIREBASE_AUTH.signOut();
  };
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button onPress={handleSignOut} appearance="ghost" status="danger">
        Sign Out
      </Button>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
  },
});
