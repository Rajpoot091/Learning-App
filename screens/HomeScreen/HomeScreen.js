import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import Styles from "./Style";
import Card from "../../Components/Cards/Card";
import Cource from "../../Components/courses/Cources";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NotificationIcon } from "../../Components/Icons/NotificationIcon";
import Logo from "../../Components/Logo/Logo";
import { logos } from "../../scr/constants/logos";
import { cards } from "../../scr/constants/cards";
import { Cources } from "../../scr/constants/cources";
export default function HomeScreen() {
  return (
    <View style={Styles.container}>
      <View style={Styles.Title}>
        <Image
          style={Styles.imageStyle}
          source={require("../../assets/Image/Image.jpg")}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={Styles.TopText}>Welcome Back,</Text>
          <Text style={Styles.NameStyle}>Asad</Text>
        </View>
        <NotificationIcon
          style={{ position: "absolute", right: 15, top: 62 }}
        />
      </View>
      <ScrollView
        style={{ paddingLeft: 16 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {logos.map((logo, index) => (
          <Logo key={index} image={logo.image} text={logo.text} />
        ))}
      </ScrollView>

      <Text style={Styles.Subtitle}>Continue learning</Text>

      {/* Cards  */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={Styles.ScrollViewStyle}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            Image={card.image}
            Title={card.title}
            logo={card.logo}
            caption={card.caption}
            subtitle={card.subtitle}
          />
        ))}
      </ScrollView>
      <Text style={Styles.Subtitle}>Related Cources</Text>
      <ScrollView horizontal={true}>
        {Cources.map((cource, index) => (
          <Cource
            key={index}
            image={cource.Image}
            logo={cource.logo}
            text={cource.text}
            subtitle={cource.subtitle}
            avatar={cource.Avatar}
            caption={cource.caption}
            name={cource.name}
          />
        ))}
      </ScrollView>
    </View>
  );
}
