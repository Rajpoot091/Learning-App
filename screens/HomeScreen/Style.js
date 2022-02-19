import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    width: "100%",
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    flexDirection: "row",
    // backgroundColor: "green",
  },
  TopText: {
    color: "#b8bece",
    fontSize: 16,
    fontWeight: "500",
  },
  NameStyle: {
    fontSize: 20,
    color: "#3c4560",
    fontWeight: "bold",
  },
  imageStyle: {
    height: 44,
    width: 44,
    backgroundColor: "black",
    borderRadius: 23,
  },
  Subtitle: {
    color: "#b8bece",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 20,
    marginTop: 20,
    textTransform: "uppercase",
  },
  ScrollViewStyle: {
    // paddingBottom: 10,
  },
});

export default Styles;
