import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: 300,
    height: 200,
    borderRadius: 14,
    marginLeft: 20,
    marginRight: 5,
    marginTop: 20,
    overflow: "hidden",
    elevation: 15,
    shadowColor: "black",
    marginBottom: 20,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
  },
  insideContainer: {
    width: "100%",
    height: "70%",
  },
  ImageStyle: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  imageText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    paddingRight: 100,
  },
  TextView: {
    marginLeft: 20,
    marginTop: 20,
  },
  logoView: {
    paddingLeft: 10,
    paddingTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 44,
    height: 44,
  },
  LogoName: {
    fontSize: 20,
    color: "#3c4560",
    fontWeight: "bold",
  },
  logoSubtitile: {
    color: "#b8bece",
    fontSize: 16,
    fontWeight: "500",
  },
  logoTextView: {
    paddingLeft: 10,
  },
});

export default Styles;
