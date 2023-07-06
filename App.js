import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* I've looked through bunch of apps and found out that even Uber doesn't have the StatusBar so I decided to remove it at least for now */}
      <Text>DealFinder</Text>
      <TouchableHighlight onPress={() => console.log(123)}>
        <Image
          loadingIndicatorSource={require("./assets/image.png")}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View style={{width: 100, height: 50, backgroundColor: 'lightblue'}}></View>
      </TouchableNativeFeedback>
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
