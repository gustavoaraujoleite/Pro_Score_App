import { Pressable, View, Text, StyleSheet, Image } from "react-native";

export default function DefaultButton(props) {
  return (
    <Pressable style={[styles.mainContainer, props.style]}>
      <Image source={props.source} style={styles.image} />
      <View>
        <Text style={[styles.innerText, props.textStyle]}>{props.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.4,
  },
  image: {
    marginRight: 16,
  },
  innerText: {
    fontSize: 16,
    fontFamily: "Inter-600",
  },
});
