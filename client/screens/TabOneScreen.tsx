import { StyleSheet } from "react-native";
// @ts-ignore
import EditScreenInfo from "../components/EditScreenInfo";
// @ts-ignore
import { Text, View } from "../components/Themed";
// @ts-ignore
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    // @ts-ignore
    <View style={styles.container}>
      {/* @ts-ignore */}
      <Text style={styles.title}>Tab hi</Text>
      {/* @ts-ignore */}

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* @ts-ignore */}

      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
