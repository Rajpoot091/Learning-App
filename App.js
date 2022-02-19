import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <HomeScreen />
        </ScrollView>
      </SafeAreaView>

      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewcontainer: {
    height: 200,
    width: 300,
    backgroundColor: "white",
    elevation: 20,
    shadowColor: "black",
  },
});
