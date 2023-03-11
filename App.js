import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LogoPresentation from "./src/screens/LoginScreens/LogoPresentation";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Inter-300": require("./assets/fonts/Inter-Thin.ttf"),
    "Inter-400": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-500": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-600": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-800": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Montserrat-300": require("./assets/fonts/Montserrat-Thin.ttf"),
    "Montserrat-400": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-500": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-600": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-800": require("./assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <LogoPresentation />
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
