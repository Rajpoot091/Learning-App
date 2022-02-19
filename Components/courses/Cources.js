import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Cource(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ImageContainer}>
        <Image style={styles.Image} source={props.image} />
        <Image style={styles.logo} source={props.logo} />
        <View style={{ position: "absolute", top: "45%" }}>
          <Text style={styles.text}>{props.text}</Text>
          <Text style={styles.subtitle}>{props.subtitle}</Text>
        </View>
      </View>
      <View style={styles.AvatarContainer}>
        <Image style={styles.avatar} source={props.avatar} />
        <View>
          <Text style={styles.caption}>{props.caption}</Text>
          <Text style={styles.name}>{props.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320,
    marginLeft: 20,
    height: 300,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    overflow: "hidden",
    elevation: 20,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 6 },
    shadowOpacity: 0.2,
  },
  ImageContainer: {
    width: "100%",
    height: "75%",
    backgroundColor: "blue",
  },
  Image: {
    width: "100%",
    height: "100%",
  },
  logo: {
    position: "absolute",
    left: "50%",
    top: 20,
    width: 24,
    height: 24,
  },
  text: {
    color: "#b8bece",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 20,
    marginTop: 20,
    textTransform: "uppercase",
  },
  subtitle: {
    color: "white",
    fontWeight: "800",
    fontSize: 25,
    marginLeft: 20,
    paddingRight: 100,
  },
  AvatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  avatar: {
    width: 34,
    height: 34,
    paddingLeft: 20,
    borderRadius: 20,
  },
  caption: {
    paddingHorizontal: 10,
    fontSize: 15,
    color: "#3c4560",
    fontWeight: "bold",
  },
  name: {
    paddingHorizontal: 10,
    color: "#b8bece",
    fontSize: 16,
    fontWeight: "500",
  },
});
