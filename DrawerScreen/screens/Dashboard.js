import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import DrawerScreenWrapper from "../components/DrawerScreenWrapper";
const Dashboard = ({ navigation }) => {
  return (
    <DrawerScreenWrapper>
      <View style={styles.dashboard}>
        <Text>Dashboard</Text>
        <Button
          title="toggle drawer"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
    </DrawerScreenWrapper>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  dashboard: {
    borderWidth: 2,
    flex: 1,
  },
});
