import { Text, View, Image, Pressable, ScrollView } from "react-native";
import { globalStyles } from "../../../styles/global";
import { Link } from "expo-router";
import { router } from "expo-router/build/global-state/router";

export default function ShuttleScreen() {
  return (
    <ScrollView>  
      <View style={globalStyles.container}>
        <View style={globalStyles.shuttleTitles}>
          <Text style={globalStyles.h4}>
            Shuttle
          </Text>
        </View>
        <View style={globalStyles.shuttlePressable}>
          <Pressable style={globalStyles.shuttlePress}>
            <Text style={globalStyles.shuttleText}>
              Routes
            </Text>
          </Pressable>
          <Pressable style={globalStyles.shuttlePress}>
            <Text style={globalStyles.shuttleText}>
              Live Tracking
            </Text>
          </Pressable>  
        </View>
        <View style={globalStyles.shuttleTabs}>
          <View style={globalStyles.shuttleCard}>
            <View>
              <Image
                source={require("../../../assets/images/Bus-Logo.png")}
                style={globalStyles.shuttleImage}
              />
            </View>
            <View style={globalStyles.shuttleInfo}>
              <Text style={globalStyles.shuttleName}>Marietta Loop Route</Text>
              <Text style={globalStyles.shuttleDate}>Monday - Friday</Text>
              <Text style={globalStyles.shuttleTime}>7:30 AM - 6:00 PM</Text>
            </View>
            <View style={globalStyles.liveTime}>
              <Text style={globalStyles.liveText}>6 min</Text>
            </View>
          </View>
          <View style={globalStyles.shuttleCard}>
            <View>
              <Image
                source={require("../../../assets/images/Bus-Logo.png")}
                style={globalStyles.shuttleImage}
              />
            </View>
            <View style={globalStyles.shuttleInfo}>
              <Text style={globalStyles.shuttleName}>Marietta Shopping Route</Text>
              <Text style={globalStyles.shuttleDate}>Monday - Friday</Text>
              <Text style={globalStyles.shuttleTime}>7:30 AM - 6:00 PM</Text>
            </View>
            <View style={globalStyles.liveTime}>
              <Text style={globalStyles.liveText}>6 min</Text>
            </View>
          </View>
          <View style={globalStyles.shuttleCard}>
            <View>
              <Image
                source={require("../../../assets/images/Bus-Logo.png")}
                style={globalStyles.shuttleImage}
              />
            </View>
            <View style={globalStyles.shuttleInfo}>
              <Text style={globalStyles.shuttleName}>Kennesaw/Marietta Route</Text>
              <Text style={globalStyles.shuttleDate}>Monday - Friday</Text>
              <Text style={globalStyles.shuttleTime}>7:30 AM - 6:00 PM</Text>
            </View>
            <View style={globalStyles.liveTime}>
              <Text style={globalStyles.liveText}>6 min</Text>
            </View>
          </View>
          <View style={globalStyles.shuttleCard}>
            <View>
              <Image
                source={require("../../../assets/images/Bus-Logo.png")}
                style={globalStyles.shuttleImage}
              />
            </View>
            <View style={globalStyles.shuttleInfo}>
              <Text style={globalStyles.shuttleName}>Shuttle Parking</Text>
              <Text style={globalStyles.shuttleDate}>Monday - Friday</Text>
              <Text style={globalStyles.shuttleTime}>7:30 AM - 6:00 PM</Text>
            </View>
            <View style={globalStyles.liveTime}>
              <Text style={globalStyles.liveText}>6 min</Text>
            </View>
          </View>
          <View style={globalStyles.shuttleCard}>
            <View>
              <Image
                source={require("../../../assets/images/Bus-Logo.png")}
                style={globalStyles.shuttleImage}
              />
            </View>
            <View style={globalStyles.shuttleInfo}>
              <Text style={globalStyles.shuttleName}>Economy Parking</Text>
              <Text style={globalStyles.shuttleDate}>Monday - Friday</Text>
              <Text style={globalStyles.shuttleTime}>7:30 AM - 6:00 PM</Text>
            </View>
            <View style={globalStyles.liveTime}>
              <Text style={globalStyles.liveText}>6 min</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}