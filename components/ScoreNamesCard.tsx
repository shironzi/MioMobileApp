import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ScoreNamesCard = (props: {
  name: string;
  score: string;
  attempt: string;
}) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.navigate("/subject/(sub-details)/scoreDetails")}
      style={styles.touchableOpacity}
    >
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <View style={styles.yellowBulletin} />
          <View style={styles.textContent}>
            <Text style={styles.title} numberOfLines={3}>
              {props.name}
            </Text>
            <View style={styles.bottomRow}>
              <Text style={styles.score}>{props.score}</Text>
              <Text style={styles.type}> | {props.attempt}</Text>
            </View>
          </View>
          <View style={styles.rightSection}>
            <Entypo name="chevron-small-right" size={30} color="#aaa" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 4,
    top: 15,
  },
  cardContainer: {
    borderWidth: 0,
    margin: 0,
    padding: 0,
    borderRadius: 10,
    shadowColor: "transparent",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  yellowBulletin: {
    width: "1.5%",
    height: 55,
    backgroundColor: "#FFBF18",
    borderRadius: 3,
    marginRight: 12,
  },
  textContent: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    color: "#000",
    fontWeight: "500",
    marginBottom: 4,
    flexShrink: 1,
    flexWrap: "wrap",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  score: {
    fontSize: 13,
    color: "#888",
  },
  type: {
    fontSize: 13,
    color: "#888",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 10,
  },
});

export default memo(ScoreNamesCard);
