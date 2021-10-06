import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function MenuButtons() {
  const items = [
    {
      id: 1,
      name: "video-camera",
      title: "New Meeting",
      bgColor: "#FF751F",
    },
    {
      id: 2,
      name: "plus-square",
      title: "Join",
    },
    {
      id: 3,
      name: "calendar",
      title: "Schedule",
    },
    {
      id: 4,
      name: "upload",
      title: "Share Screen",
    },
  ];

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View style={styles.buttonContainer} key={index}>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: item.bgColor ? item.bgColor : "blue",
            }}
          >
            <FontAwesome name={item.name} size={23} color="#efefef" />
          </TouchableOpacity>
          <Text style={styles.menuText}>{item.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    paddingBottom: 10,
    borderBottomColor: "#1F1F1F",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  menuText: {
    color: "#858585",
    fontSize: 12,
    paddingTop: 10,
    fontWeight: "600",
  },
});
