import {
  StyleSheet,
  View,
  Button,
  Dimensions,
  useWindowDimensions
} from "react-native";
import {
  SafeAreaView,
} from "react-native-safe-area-context";
import {useDeviceOrientation} from '@react-native-community/hooks'


export default function App() {
  const {landscape} = useDeviceOrientation()
  
  console.log('orientation is:', landscape)
  console.log(useWindowDimensions())
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: "pink",
          width: '100%',
          height: landscape ? '100%' : '30%'
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    alignItems: "center",
  },
});
