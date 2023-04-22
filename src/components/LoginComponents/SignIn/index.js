import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import LoginDefaultInputs from "../../UI/Inputs/LoginDefaultInputs";
import ActionButton from "../../UI/Buttons/ActionButton";
import RememberMe from "../../UI/RememberMe";
export default function SignInContent(props) {
  const userIcon = <AntDesign name="user" size={20} color="#1E1E1E" />;
  const lockIcon = <Feather name="lock" size={20} color="#1E1E1E" />;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <LoginDefaultInputs
          placeholder="Enter your username"
          icon={userIcon}
          secureTextEntry={false}
          keyboardType="email-address"
        />
        <LoginDefaultInputs
          placeholder="Enter your password"
          icon={lockIcon}
          secureTextEntry
        />
      </View>

      <View>
        <ActionButton title="Sign in" />
      </View>

      <View>
        <RememberMe />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 62,
    width: "100%",
  },
  inputContainer: {
    gap: 40,
    marginBottom: 40,
  },
});
