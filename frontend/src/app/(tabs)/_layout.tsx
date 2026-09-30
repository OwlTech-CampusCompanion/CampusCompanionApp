import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ headerShown: false, title: "Home"}}
        
      />
    
      <Tabs.Screen
        name="map"
        options={{ headerShown: false, title: "Map"}}
        
      />

      <Tabs.Screen
        name="events"
        options={{ headerShown: false, title: "Events"}}
        
      />

      <Tabs.Screen
        name="dining"
        options={{ headerShown: false, title: "Dining"}}
        
      />

      <Tabs.Screen
        name="profile"
        options={{ headerShown: false, title: "Profile"}}
        
      />
    </Tabs>
  );
}
