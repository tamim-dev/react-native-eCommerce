import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";

let currentValues = {
    name: "",
    email: "",
    password: "",
};

export default function App() {
    let [values, setValuse] = useState(currentValues);

    let handleValues = (e, name) => {
        setValuse({
            ...values,
            [name]: e,
        });
    };

    let hendleClick = () => {
        console.log(values.name);
        console.log(values.email);
        console.log(values.password);
    };
    return (
        <>
            <View style={styles.container}>
                <View style={styles.regsitra}>
                    <Text style={styles.heading}>Registration</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Name..."
                        onChangeText={(text) => handleValues(text, "name")}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email..."
                        onChangeText={(text) => handleValues(text, "email")}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password..."
                        onChangeText={(text) => handleValues(text, "password")}
                    />
                    <Button onPress={hendleClick} title="Registration" />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    regsitra: {
        justifyContent: "center",
        alignItems: "center",
        rowGap: 25,
        backgroundColor: "#E8EBFC",
        paddingHorizontal: 25,
        paddingVertical: 30,
        borderRadius: 10,
        elevation: 4,
    },
    input: {
        borderWidth: 1,
        padding: 10,
        width: 330,
        borderRadius: 4,
    },
    heading: {
        fontSize: 20,
        fontWeight: "700",
        textTransform: "uppercase",
        marginBottom: 10,
    },
});
