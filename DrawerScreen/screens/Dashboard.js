import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Dashboard = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard</Text>
      <Button title="toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
