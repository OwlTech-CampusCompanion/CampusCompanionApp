import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create ({
    container: {
        flex: 1,
    },

    logoBackground: {
        backgroundColor: "black",
        padding: 30,
        marginBottom: 20,
    },

    logoTabsBackground: {
        backgroundColor: "black",
        padding: 25,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        height: 100,
    },

    tabsLogo: {
        width: 40,
        height: 40,
    },

    tabsTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },

    notifyLogo: {
        color: "white",
        height: 30,
        width: 30,
    },

    tabPress: {
        backgroundColor: "black",
        height: 100,
        width: 90,
        borderRadius: 20,
        alignItems: "center",
        padding: 10
    },

    tabHolder: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 5,
        marginBottom: 30
    },


    loginBody: {
        marginTop: 40
    },

    logo: {
        height: 150,
        width: 150,
        margin: "auto",
        padding: 10,
        marginTop: 20,
    },

    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },

    loginInput: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: "rgba(52, 52, 52, 0.05)",
        width: 350,
        margin: "auto",
        marginBottom: 20
    },

    iconLogo: {
        width: 20,
        height: 20,
        marginRight: 8,
        marginLeft: 8
    },

    icon: {
        width: 20,
        height: 20,
        marginTop: 10
    },

    input: {
        flex: 1,
        paddingVertical: 8,
        fontSize: 16,
        height: 50,
    },


    loginLinks: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },

    loginButton: {
        borderRadius: 10,
        backgroundColor: "black",
        width: 350,
        height: 50,
        marginBottom: 20,
    },

    buttonText: {
        margin: "auto",
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },

    text: {
        fontSize: 16,
    },

    signupLink: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic"
    },

    loginLink: {
        fontSize: 16,
        fontWeight: "bold",
        fontStyle: "italic"
    },

    h2: {
        fontSize: 24,
        fontWeight: "bold",
    },

    h3: {
        fontSize: 18,
    },

    h4: {
        fontSize: 22,
        fontWeight: "bold"
    },

    hTitles: {
        padding: 10,
        flexDirection: "column",
        marginLeft: 10,
        marginBottom: 10
    },

    homeTitles: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 10,
    },

    eventCard: {
        flexDirection: "row",
        backgroundColor: "black",
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },

    eventDate: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        width: 75
    },

    eventMonth: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
    },

    eventDay: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
    },

    eventInfo: {
        marginLeft: 15,
        justifyContent: "center"
    },

    eventName: {
        fontWeight: "bold",
        color: "white",
    },

    eventLocation: {
        color: "white",
    },

    eventTime: {
        color: "white",
    },

    Titles: {
        padding: 10,
        marginLeft: 10,
        marginBottom: 10
    },

    searchInput: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: "rgba(52, 52, 52, 0.05)",
        width: 350,
        marginLeft: 20,
        marginBottom: 30
    },

    map: {
        flex: 1,
    }
});
