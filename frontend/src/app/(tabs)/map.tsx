import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../../styles/global";
import { router } from "expo-router/build/global-state/router";
import React from "react";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <View style={globalStyles.logoTabsBackground}>
          <Image
            source={require("../../../assets/images/KSU-Logo.png")}
            style={globalStyles.tabsLogo}
          />
          <Text style={globalStyles.tabsTitle}>Campus Map</Text>
          <Pressable
              onPress={() => router.push("/events")}
            >
            <Image
              source={require("../../../assets/images/Notification-Logo.png")}
              style={globalStyles.notifyLogo}
            />
          </Pressable>
        </View>
        <MapView
          style={globalStyles.map}
          initialRegion={{
            latitude: 34.0382,
            longitude: -84.5832,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
        <Marker
          coordinate={{
            latitude: 34.0382,
            longitude: -84.5832,
          }}
          title="Kennesaw State University"
        />
      </MapView>
      </View>
    </TouchableWithoutFeedback>
  );
}