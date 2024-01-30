import { Button, StyleSheet, Text, View } from "react-native";
import { FIREBASE_AUTH } from "../firebase/config";
import React from "react";

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Sign Out" />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
