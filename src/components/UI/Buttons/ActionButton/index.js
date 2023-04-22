import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function ActionButton(props) {
  return (
    <Pressable style={[styles.mainContainer, props.style]}>
      <View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    width: "100%",
    paddingVertical: 14,
    backgroundColor: "#235485",
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Inter-600",
  },
});
