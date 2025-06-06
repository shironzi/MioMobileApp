import HeaderConfig from "@/utils/HeaderConfig";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SpeechTrainingExercise = () => {
  const router = useRouter();

  HeaderConfig("Language Training Exercise");

  return (
    <View style={styles.courseContainer}>
      <View style={styles.gridContainer}>
        <View style={styles.gridItem}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/subject/(exercises)/level")}
          >
            <Image
              source={require("@/assets/icons/Speaker_Notes.png")}
              style={styles.icon}
            />
            <Text style={{ textAlign: "center", marginTop: 5 }}>
              Fill in the Blanks
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridItem}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/subject/(exercises)/level")}
          >
            <Image
              source={require("@/assets/icons/Technology_Lifestyle.png")}
              style={styles.icon}
            />
            <Text style={{ textAlign: "center", marginTop: 5 }}>
              Talk2Me: Responding Questions
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.gridItem}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push("/subject/(exercises)/level")}
          >
            <Image
              source={require("@/assets/icons/homonyms.png")}
              style={styles.icon}
            />
            <Text style={{ textAlign: "center", marginTop: 5 }}>Homonyms</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  courseTitle: {
    fontSize: 20,
  },
  dropdownContainer: {
    width: 200,
  },
  dropdown: {
    flexDirection: "row-reverse",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  selectedTextStyle: {
    color: "#FFBF18",
    fontSize: 14,
    textAlign: "right",
    flex: 1,
  },
  iconStyle: {
    fontSize: 20,
    color: "#FFBF18",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
  },
  gridItem: {
    width: "48%",
    justifyContent: "center",
    marginBottom: 16,
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    height: 140,
    padding: 16,
    fontSize: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export default memo(SpeechTrainingExercise);
