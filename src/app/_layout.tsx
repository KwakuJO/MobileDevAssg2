import { Tabs } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function RootLayout() {
  return (    
    <>
      <Tabs>
        <Tabs.Screen 
          name="index" 
          options={{
            title: "Home"
          }}
          
        />
        <Tabs.Screen 
          name="screens/research" 
          options={{
            title: "Recherche"
          }}
        />
        <Tabs.Screen 
          name="screens/library" 
          options={{
            title: "Bibliothèque"
          }}
        />
      </Tabs>
      <View style= {[ someStyles.down, someStyles.h6, someStyles.wFull ]}>
        <View style={[someStyles.w97, someStyles.hFull, someStyles.bgGray, someStyles.rounded ]}>
          <Text>Playing Song</Text>
        </View>
      </View>
    </>
    );
}

const someStyles = StyleSheet.create({
   down: {
    position: "fixed",
    bottom: 55,
    display: "flex",
    alignItems: "center"
   },
   bgGray: { backgroundColor: "gray" },
   w97: { width: "97%" },
   wFull: { width: "100%" },
   h6: { height: "5%" },
   hFull: { height: "100%" },
   rounded: {borderRadius: 10}
});