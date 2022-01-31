import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

function LoginScreen({ navigation }) {

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return (
        <View style={styles.mainContainer}>

            <View style={styles.formContainer}>

                <Text style={styles.title}>Login to instaSram</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    onChangeText={onChangeEmail}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={onChangePassword}
                    value={password}
                />

                <Button
                    title='Login'
                    onPress={() => navigation.navigate('WelcomeScreen')}
                />

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#B3B7EE',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    formContainer: {
        backgroundColor: '#FBF9FF',
        flex: 1,
        height: 300,
        flexDirection: 'column',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        width: 350,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})

export default LoginScreen;