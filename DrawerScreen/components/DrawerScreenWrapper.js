import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useDrawerProgress } from "@react-navigation/drawer";

const DrawerScreenWrapper = ({ children }) => {
  const progress = useDrawerProgress();

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: interpolate(progress.value, [0, 1], [1, 0.9], "clamp") },
      ],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      {children}
    </Animated.View>
  );
};

export default DrawerScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
