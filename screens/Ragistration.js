import { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

let currentValues = {
    name: "",
    email: "",
    password: "",
};

const Ragistration = () => {
    let [values, setValuse] = useState(currentValues);
    let [passEye, setPassEye] = useState(true);

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
    let hendleEye = () => {
        setPassEye(!passEye);
    };
    return (
        <View style={styles.container}>
            <View style={styles.regsitra}>
                <Text style={styles.heading}>Registration</Text>
                <Text style={styles.name}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name..."
                    onChangeText={(text) => handleValues(text, "name")}
                />
                <Text style={styles.name}>Your Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email..."
                    onChangeText={(text) => handleValues(text, "email")}
                />
                <Text style={styles.name}>Password</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Password..."
                        secureTextEntry={passEye}
                        onChangeText={(text) => handleValues(text, "password")}
                    />
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 15,
                            top: 15,
                        }}
                    >
                        {passEye ? (
                            <Entypo
                                onPress={hendleEye}
                                name="eye-with-line"
                                size={20}
                                color="black"
                            />
                        ) : (
                            <Entypo
                                onPress={hendleEye}
                                name="eye"
                                size={20}
                                color="black"
                            />
                        )}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.button} onPress={hendleClick}>
                        Registration
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Ragistration;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    regsitra: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F7F8FC",
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
        marginBottom: 25,
    },
    heading: {
        fontSize: 20,
        fontWeight: "700",
        textTransform: "uppercase",
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#27C4FF",
        borderRadius: 4,
        paddingHorizontal: 30,
        paddingVertical: 10,
        color: "#fff",
    },
    name: {
        alignSelf: "flex-start",
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 2,
    },
});
