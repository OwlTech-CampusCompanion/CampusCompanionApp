import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          height: 70,
        },

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      // Home
      <Tabs.Screen
        name="home"
        options={{ 
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/images/Home-Logo.png")}
              style={{ width: 25, height: 25}}
            />
          ),
        }}
      />

      //Map
      <Tabs.Screen
        name="map"
        options={{ 
          headerShown: false, 
          title: "Map",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/images/Map-Logo.png")}
              style={{ width: 25, height: 25}}
            />
          ),
        }}
      />

      //Events
      <Tabs.Screen
        name="events"
        options={{ 
          headerShown: false, 
          title: "Events",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/images/Events-Logo.png")}
              style={{ width: 25, height: 25}}
            />
          ),
        }}
      />
  
      //Dining
      <Tabs.Screen
        name="dining"
        options={{ 
          headerShown: false, 
          title: "Dining",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/images/Dining-Logo.png")}
              style={{ width: 25, height: 25}}
            />
          )
        }}
      />

      //Profile
      <Tabs.Screen
        name="profile"
        options={{ 
          headerShown: false, 
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../../assets/images/Profile-Logo.png")}
              style={{ width: 25, height: 25}}
            />
          )
        }}
      />
    </Tabs>
  );
}
