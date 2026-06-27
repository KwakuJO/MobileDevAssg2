import SongPlayingCard from "@/components/SongPlayingCard";
import preStyles from "@/constants/GlobalStyles";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function TabsLayout() {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="research"
          options={{
            title: "Recherche",
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="library"
          options={{
            title: "Bibliothèque",
            headerShown: false,
          }}
        />
      </Tabs>
      <View
        style={[
          preStyles.h6,
          someStyles.down,
          preStyles.wFull,
          preStyles.itemsCenter,
        ]}
      >
        <SongPlayingCard
          title="SOMEBODY PRAYED"
          artist="Forrest Frank, Tate Butts"
        />
      </View>
    </>
  );
}

const someStyles = StyleSheet.create({
  down: {
    position: "fixed",
    bottom: 60,
    display: "flex",
    alignItems: "center",
  },
});
