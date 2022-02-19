import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Styles from "./Style";

export default function Card(props) {
  return (
    <View style={Styles.container}>
      <View style={Styles.insideContainer}>
        <Image style={Styles.ImageStyle} source={props.Image} />
        <View style={Styles.TextView}>
          <Text style={Styles.imageText}>{props.Title}</Text>
        </View>
      </View>

      <View style={Styles.logoView}>
        <Image style={Styles.logo} source={props.logo} />
        <View style={Styles.logoTextView}>
          <Text style={Styles.LogoName}>{props.caption}</Text>
          <Text style={Styles.logoSubtitile}>{props.subtitle}</Text>
        </View>
      </View>
    </View>
  );
}
