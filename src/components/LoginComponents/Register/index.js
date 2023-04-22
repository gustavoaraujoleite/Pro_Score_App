import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LoginDefaultInputs from "../../UI/Inputs/LoginDefaultInputs";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import ActionButton from "../../UI/Buttons/ActionButton";

export default function Register(props) {
  const userIcon = <AntDesign name="user" size={20} color="#1E1E1E" />;
  const lockIcon = <Feather name="lock" size={20} color="#1E1E1E" />;
  const emailIcon = <FontAwesome name="envelope-o" size={18} color="#1E1E1E" />;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <LoginDefaultInputs
          placeholder="Enter your username"
          icon={userIcon}
          secureTextEntry={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <LoginDefaultInputs
          placeholder="Enter your email"
          icon={emailIcon}
          secureTextEntry={false}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <LoginDefaultInputs
          placeholder="Enter your password"
          icon={lockIcon}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <LoginDefaultInputs
          placeholder="Confirm your password"
          icon={lockIcon}
          secureTextEntry={true}
        />
      </View>

      <View>
        <ActionButton title="Sign up" />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.questionText}>Already have an account?</Text>
        <Pressable>
          <Text style={styles.signinRedirectBtn}>Sign in instead</Text>
        </Pressable>
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  questionText: {
    color: "#1C1C1C",
    fontFamily: "Inter-400",
    fontSize: 14,
  },
  signinRedirectBtn: {
    color: "#235485",
    fontFamily: "Inter-400",
    fontSize: 14,
  },
});
