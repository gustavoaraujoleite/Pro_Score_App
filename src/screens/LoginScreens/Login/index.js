import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import login_background from "../../../../assets/images/login_background.png";
import MainLogo from "../../../../assets/images/mainAppLogo.png";
import DefaultButton from "../../../components/UI/Buttons/DefaultButton";
import LoginBars from "../../../components/UI/LoginBars";
import googleIcon from "../../../../assets/images/googleIcon.png";
import appleIcon from "../../../../assets/images/appleIcon.png";
import SignInContent from "../../../components/LoginComponents/SignIn";
import Register from "../../../components/LoginComponents/Register";
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
          <View style={styles.boxInnerContainer}>
            <View>
              <Image source={MainLogo} style={styles.mainLogo} />
            </View>

            <View style={styles.barsContainer}>
              <Pressable onPress={() => setLoginsection(true)}>
                <LoginBars
                  style={loginsection ? styles.activeBar : styles.nonActiveBar}
                  title="Sign in"
                  textStyle={
                    loginsection ? styles.activeText : styles.nonActiveText
                  }
                />
              </Pressable>
              <Pressable onPress={() => setLoginsection(false)}>
                <LoginBars
                  style={!loginsection ? styles.activeBar : styles.nonActiveBar}
                  title="Sign up"
                  textStyle={[
                    !loginsection ? styles.activeText : styles.nonActiveText,
                    { marginLeft: 6 },
                  ]}
                />
              </Pressable>
            </View>

            <ScrollView style={{ width: "100%" }}>
              {loginsection && <SignInContent />}
              {!loginsection && <Register />}
            </ScrollView>

            <View style={styles.optionTextContainer}>
              <View style={styles.conditionalBar}></View>
              <View>
                <Text style={styles.optionText}>or</Text>
              </View>
              <View style={styles.conditionalBar}></View>
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
    paddingHorizontal: 20,
    alignItems: "center",
    width: "60%",
    height: "96%",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 8,
  },
  boxInnerContainer: {
    paddingVertical: 40,
    paddingHorizontal: 30,
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
    marginBottom: 2,
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
    justifyContent: "space-between",
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
    width: 60,
    marginHorizontal: 10,
    marginBottom: 0,
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
