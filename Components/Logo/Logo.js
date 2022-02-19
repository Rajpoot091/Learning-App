import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Logo(props) {
  return (
    <View style={styles.container}>
      <Image source={props.image} style={styles.Image} />
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 60,
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    margin: 8,
    borderRadius: 14,
    alignItems: "center",
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
  },
  Image: {
    width: 24,
    height: 24,
  },
  text: {
    paddingHorizontal: 10,
  },
});
