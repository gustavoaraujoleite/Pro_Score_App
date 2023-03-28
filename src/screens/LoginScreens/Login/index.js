import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import login_background from "../../../../assets/images/login_background.png";
import MainLogo from "../../../../assets/images/mainAppLogo.png";
import DefaultButton from "../../../components/UI/Buttons/DefaultButton";
import LoginBars from "../../../components/UI/LoginBars";
import googleIcon from "../../../../assets/images/googleIcon.png";
import appleIcon from "../../../../assets/images/appleIcon.png";
export default function Login() {
  const [loginsection, setLoginsection] = useState(true);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ImageBackground
        source={login_background}
        style={styles.background}
        resizeMode="stretch"
        blurRadius={3}
      >
        <View style={styles.mainContentBox}>
          <View style={styles.test}>
            <View>
              <Image source={MainLogo} style={styles.mainLogo} />
            </View>

            <View style={styles.barsContainer}>
              <LoginBars
                style={loginsection ? styles.activeBar : styles.nonActiveBar}
                title="Sign in"
                textStyle={
                  loginsection ? styles.activeText : styles.nonActiveText
                }
              />
              <LoginBars
                style={!loginsection ? styles.activeBar : styles.nonActiveBar}
                title="Sign up"
                textStyle={[
                  !loginsection ? styles.activeText : styles.nonActiveText,
                  { marginLeft: 6 },
                ]}
              />
            </View>

            {/* SUBJECT */}

            <View style={styles.optionTextContainer}>
              <LoginBars style={styles.conditionalBar} />
              <View>
                <Text style={styles.optionText}>or</Text>
              </View>
              <LoginBars style={styles.conditionalBar} />
            </View>

            <View style={styles.buttonsContainer}>
              <View style={{ marginBottom: 32 }}>
                <DefaultButton
                  title="Sign up with Google"
                  style={styles.googleButton}
                  source={googleIcon}
                />
              </View>
              <View>
                <DefaultButton
                  title="Sign up with Apple"
                  source={appleIcon}
                  style={styles.appleButton}
                  textStyle={{ color: "#fff" }}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContentBox: {
    paddingVertical: 40,
    paddingHorizontal: 56,
    alignItems: "center",

    width: "60%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 8,
  },
  test: {
    paddingVertical: 40,
    paddingHorizontal: 56,
    alignItems: "center",
    width: "100%",
  },
  mainLogo: {
    height: 86,
    width: 86,
  },
  barsContainer: {
    marginTop: 57,
    flexDirection: "row",
    alignItems: "center",
  },
  activeBar: {
    height: 4,
    backgroundColor: "#235485",
  },
  nonActiveBar: {
    height: 2,
    backgroundColor: "#333333",
  },
  activeText: {
    color: "#235485",
    fontFamily: "Inter-600",
    fontSize: 18,
  },
  nonActiveText: {
    color: "#333333",
    fontFamily: "Inter-600",
    fontSize: 18,
  },
  optionTextContainer: {
    flexDirection: "row",
    marginTop: 53,
    alignItems: "center",
  },
  optionText: {
    fontSize: 18,
    color: "#000",
    fontFamily: "Inter-500",
  },
  conditionalBar: {
    backgroundColor: "#000",
    height: 2,
    marginHorizontal: 10,
    marginBottom: 0,
    marginTop: 14,
  },
  buttonsContainer: {
    marginVertical: 41,
    width: "100%",
  },
  googleButton: {
    backgroundColor: "#fff",
  },
  appleButton: {
    backgroundColor: "#000",
  },
});
