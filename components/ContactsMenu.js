import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function ContactsMenu() {
  return (
    <View style={styles.container}>
      {/* Contact Container */}
      <View style={styles.row}>
        {/* Image Container */}
        <View style={styles.starredIcon}>
          <AntDesign name="star" size={30} color="#efefef" />
        </View>
        {/* Text */}
        <Text style={styles.text}>Starred</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
});
