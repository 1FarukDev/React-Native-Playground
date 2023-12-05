import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./screens/Dashboard";
import Settings from "./screens/Settings";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          // headerShown: false,
          drawerType: "slide",
          overlayColor: "transparent",

          drawerStyle: {
            backgroundColor: "#009688",
          },
          sceneContainerStyle: {
            backgroundColor: "#009688",
          },
        }}
        // screenOptions={{headerShown:false}}
      >
        <Drawer.Screen name="dashboard" component={Dashboard} />
        <Drawer.Screen name="setting" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
