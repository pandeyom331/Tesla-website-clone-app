import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get('screen').height,
  },

  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 16,
    color: "#494b4e",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 70,
    width: '100%',
  },

  midtext:{
    textDecorationLine: 'underline',
  }
});

export default styles;
