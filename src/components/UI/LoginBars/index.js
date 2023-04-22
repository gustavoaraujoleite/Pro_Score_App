import { StyleSheet, Text, View } from "react-native";

export default function LoginBars(props) {
  return (
    <View>
      <View style={styles.barContainer}>
        <View style={[styles.barStyle, props.style]}></View>
      </View>
      <View style={styles.textContainer}>
        <Text style={props.textStyle}>{props.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 4,
  },
  barStyle: {
    width: 77,
    marginBottom: 4,
    position: "absolute",
  },
  textContainer: {
    width: 77,
  },
});
