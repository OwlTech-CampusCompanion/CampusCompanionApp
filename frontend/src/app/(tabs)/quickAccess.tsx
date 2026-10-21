import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback } from "react-native";
import { globalStyles } from "../../../styles/global";
import { router } from "expo-router/build/global-state/router";

export default function QuickAccessScreen() {
  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={globalStyles.container}>
        <View style={globalStyles.accessTitles}>
          <Text style={globalStyles.h4}>
            Quick Access
          </Text>
          <Text style={globalStyles.h3}>
            Everything you need around campus.
          </Text>
        </View>
      <View style={globalStyles.searchInput}>
        <Image
          source={require("../../../assets/images/Search-Logo.png")}
          style={globalStyles.iconLogo}
        />
        <TextInput
          style={globalStyles.input}
          autoCapitalize="words"
          placeholder="Find a campus feature..."
          placeholderTextColor={"black"}
        />
      </View>
      <View style={globalStyles.eventTitles}>
        <Text style={globalStyles.h4}>
          Campus essentials
        </Text>
      </View>
      <View style={globalStyles.quickTabs}>
        <View style={globalStyles.accessTabs}>
          <Pressable 
            onPress={() => router.push("/(tabs)/map")}
            style={globalStyles.tabs}>
            <Text style={globalStyles.textTab}>
              Campus Map
            </Text>
            <Text style={globalStyles.h5}>
              Find buildings
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(tabs)/events")}
            style={globalStyles.tabs}>
            <Text style={globalStyles.textTab}>
              Events
            </Text>
            <Text style={globalStyles.h5}>
              What's happening
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(tabs)/notification")}
            style={globalStyles.tabs}>
            <Text style={globalStyles.textTab}>
              Notifications
            </Text>
          </Pressable>
        </View>
        <View style={globalStyles.accessTabs}>
          <Pressable
            onPress={() => router.push("/(tabs)/shuttle")}
            style={globalStyles.tabs}>
            <Text style={globalStyles.textTab}>
              Shuttle Tracker
            </Text>
            <Text style={globalStyles.h5}>
              Routes and stops
            </Text>
          </Pressable>
          <Pressable
            onPress={() => router.push("/(tabs)/dining")}
            style={globalStyles.tabs}>
            <Text style={globalStyles.textTab}>
              Dining
            </Text>
            <Text style={globalStyles.h5}>
              Menus and hours
            </Text>
          </Pressable>
          <Pressable 
            onPress={() => router.push("/(tabs)/favoriteLocations")}
            style={globalStyles.tabs}>
            <Text style={globalStyles.textTab}>
              Buildings
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={globalStyles.eventTitles}>
        <Text style={globalStyles.h4}>
          Recently used
        </Text>
      </View>
      <View style={globalStyles.notifyCard}>
        <Text style={globalStyles.Marking}>
          Directions to a building
        </Text>
        <Text style={globalStyles.Marking}>
          {">"}
        </Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
  );
}