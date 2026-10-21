import { Text, View, Image, TextInput, Pressable, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import { globalStyles } from "../../../styles/global";
import { router } from "expo-router/build/global-state/router";

export default function FavoriteLocationScreen() {
  return (
    <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={globalStyles.container}>
                <View style={globalStyles.accessTitles}>
                    <Text style={globalStyles.h4}>
                        Favorite Locations
                    </Text>
                    <Text style={globalStyles.h3}>
                    Your saved campus places.
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
                        placeholder="Search favorite locations..."
                        placeholderTextColor={"black"}
                    />
                </View>
                <View style={globalStyles.homeTitles}>
                    <Text style={globalStyles.h4}>
                        Saved Places
                    </Text>
                    <Text style={globalStyles.h3}>
                        4 locations
                    </Text>
                </View>
                <View style={globalStyles.locationHolder}>
                    <View style={globalStyles.locationCard}>
                        <View style={globalStyles.locationHeader}>
                            <Image
                                source={require("../../../assets/images/Event-Image.jpg")}
                                style={globalStyles.locationImage}
                            />
                            <View style={globalStyles.locationInfo}>
                                <Text style={globalStyles.eventName}>Student Center</Text>
                                <Text style={globalStyles.eventLocation}>Marietta Campus</Text>
                                <Text style={globalStyles.eventActivity}>Student services & activites</Text>
                            </View>
                            <Pressable style={globalStyles.favoriteStar}>
                                <Text style={globalStyles.starIcon}>★</Text>
                            </Pressable>
                        </View>
                        <View style={globalStyles.pressMap}>
                            <Pressable
                                style={globalStyles.viewMap}
                            >
                                <Text style={globalStyles.mapButtonText}>View on Map</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={globalStyles.locationCard}>
                        <View style={globalStyles.locationHeader}>
                            <Image
                                source={require("../../../assets/images/Event-Image.jpg")}
                                style={globalStyles.locationImage}
                            />
                            <View style={globalStyles.locationInfo}>
                                <Text style={globalStyles.eventName}>Campus Library</Text>
                                <Text style={globalStyles.eventLocation}>Marietta Campus</Text>
                                <Text style={globalStyles.eventActivity}>Study & research</Text>
                            </View>
                            <Pressable style={globalStyles.favoriteStar}>
                                <Text style={globalStyles.starIcon}>★</Text>
                            </Pressable>
                        </View>
                        <View style={globalStyles.pressMap}>
                            <Pressable
                                style={globalStyles.viewMap}
                            >
                                <Text style={globalStyles.mapButtonText}>View on Map</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={globalStyles.locationCard}>
                        <View style={globalStyles.locationHeader}>
                            <Image
                                source={require("../../../assets/images/Event-Image.jpg")}
                                style={globalStyles.locationImage}
                            />
                            <View style={globalStyles.locationInfo}>
                                <Text style={globalStyles.eventName}>Recreation Center</Text>
                                <Text style={globalStyles.eventLocation}>Marietta Campus</Text>
                                <Text style={globalStyles.eventActivity}>Fitness & sports</Text>
                            </View>
                            <Pressable style={globalStyles.favoriteStar}>
                                <Text style={globalStyles.starIcon}>★</Text>
                            </Pressable>
                        </View>
                        <View style={globalStyles.pressMap}>
                            <Pressable
                                style={globalStyles.viewMap}
                            >
                                <Text style={globalStyles.mapButtonText}>View on Map</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={globalStyles.locationCard}>
                        <View style={globalStyles.locationHeader}>
                            <Image
                                source={require("../../../assets/images/Event-Image.jpg")}
                                style={globalStyles.locationImage}
                            />
                            <View style={globalStyles.locationInfo}>
                                <Text style={globalStyles.eventName}>Stingers Dining Hall</Text>
                                <Text style={globalStyles.eventLocation}>Marietta Campus</Text>
                                <Text style={globalStyles.eventActivity}>Food & dining</Text>
                            </View>
                            <Pressable style={globalStyles.favoriteStar}>
                                <Text style={globalStyles.starIcon}>★</Text>
                            </Pressable>
                        </View>
                        <View style={globalStyles.pressMap}>
                            <Pressable
                                style={globalStyles.viewMap}
                            >
                                <Text style={globalStyles.mapButtonText}>View on Map</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </ScrollView>
  );
}