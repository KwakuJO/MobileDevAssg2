import { Tabs } from "expo-router";


export default function RootLayout() {
  return (    
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
          title: "Bibliothéque"
        }}
      />
    </Tabs>
    );
}
