import { Text, View, Image, Pressable, ScrollView,} from "react-native";
import { globalStyles } from "../../../styles/global";
import { router } from "expo-router/build/global-state/router";

export default function SettingsScreen() {
    return (
        <ScrollView>
            <View style={globalStyles.container}>
                <View style={globalStyles.settingsTop}>
                    <Text style={globalStyles.h2}>
                        Settings
                    </Text>
                </View>
                <View style={globalStyles.settingsHolder}>
                    <Text style={globalStyles.h4}>
                        PREFERENCES
                    </Text>
                </View>
                <View style={globalStyles.settingsTabs}>
                    <Pressable
                        onPress={() => router.push("/(tabs)/notification")}
                        style={globalStyles.settingsTab}
                    >
                    <Text style={globalStyles.settingsText}>Push Notifications</Text>
                    <Text style={globalStyles.settingsText}>{">"}</Text>
                    </Pressable>
                    <Pressable
                        style={globalStyles.settingsTab}
                    >
                    <Text style={globalStyles.settingsText}>Appearance</Text>
                    <Text style={globalStyles.settingsText}>{">"}</Text>
                    </Pressable>
                    <View style={globalStyles.settingsHolder}>
                        <Text style={globalStyles.h4}>
                            ACCOUNT
                        </Text>
                    </View>
                    <Pressable
                        onPress={() => router.push("/profile")}
                        style={globalStyles.settingsTab}
                    >
                    <Text style={globalStyles.settingsText}>Edit Profile</Text>
                    <Text style={globalStyles.settingsText}>{">"}</Text>
                    </Pressable>
                    <Pressable
                        style={globalStyles.settingsTab}
                    >
                    <Text style={globalStyles.settingsText}>Change Password</Text>
                    <Text style={globalStyles.settingsText}>{">"}</Text>
                    </Pressable>
                    <View >
                        <Text style={globalStyles.h4}>
                            ABOUT
                        </Text>
                    </View>
                    <Pressable
                        style={globalStyles.settingsTab}
                    >
                    <Text style={globalStyles.settingsText}>Privacy Policy</Text>
                    <Text style={globalStyles.settingsText}>{">"}</Text>
                    </Pressable>
                    <Pressable
                        style={globalStyles.settingsTab}
                    >
                    <Text style={globalStyles.settingsText}>About Campus Companion</Text>
                    <Text style={globalStyles.settingsText}>{">"}</Text>
                    </Pressable>
                </View>
                <View style={globalStyles.logoutButton}>
                    <Pressable
                        onPress={() => router.push("/")}
                        style={globalStyles.settingsTab}
                    >
                    <Text style={globalStyles.buttonText}>Log Out</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}