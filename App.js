import { StyleSheet, View, Button, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        onPress={() =>
          Alert.alert("Alert title", "Alert message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
        title="Press me"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
});
