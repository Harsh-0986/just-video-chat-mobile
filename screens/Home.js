import React from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ContactsMenu from "../components/ContactsMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          minHeight: `${Platform.OS === "web" ? "96.5vh" : "100%"}`,
        }}
      >
        {/* Header */}
        <Header />
        {/* SearchBar */}
        <SearchBar />
        {/* Menu */}
        <MenuButtons navigation={navigation} />
        {/* Contacts */}
        <ContactsMenu />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
