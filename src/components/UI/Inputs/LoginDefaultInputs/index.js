import { StyleSheet, TextInput, View } from "react-native";

export default function LoginDefaultInputs(props) {
  return (
    <View style={styles.mainContainer}>
      <View>{props.icon}</View>
      <View>
        <TextInput
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          placeholderTextColor={"#585858"}
          secureTextEntry={props.secureTextEntry}
          style={styles.input}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderBottomWidth: 1,
    width: "100%",
    paddingBottom: 8,
  },
  input: {
    paddingRight: 4,
    width: "100%",
  },
});
