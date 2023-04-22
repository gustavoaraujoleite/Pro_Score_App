import { Button, Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
export default function RememberMe(props) {
  const [savePassword, setSavePassword] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={styles.checkContainer}
        onPress={() => setSavePassword(!savePassword)}
      >
        {savePassword && <AntDesign name="check" size={18} color="#AAA" />}
      </Pressable>

      <View style={styles.button}>
        <Button title="Forgot password?" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkContainer: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    height: 24,
    width: 24,
  },
});
