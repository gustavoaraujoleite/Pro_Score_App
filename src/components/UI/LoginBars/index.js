import { StyleSheet, Text, View } from "react-native";

export default function LoginBars(props) {
  return (
    <View>
      <View style={[styles.barStyle, props.style]}></View>
      <Text style={props.textStyle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  barStyle: {
    width: 77,
    marginBottom: 4,
  },
});
