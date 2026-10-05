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
        padding: 30,
        marginBottom: 20,
    },

    tabPress: {
        
    },

    tabHolder: {

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
        marginBottom: 10
    },

    h3: {
        fontSize: 18,
    },

    hTitles: {
        padding: 10,
        marginBottom: 10
    }
});
