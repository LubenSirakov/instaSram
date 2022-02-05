import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { Link } from '@react-navigation/native';

function RegisterScreen({ navigation }) {

    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return (
        <View style={styles.mainContainer}>

            <View style={styles.formContainer}>

                <Text style={styles.title}>Register to instaSram</Text>
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
                    title='Register'
                    onPress={() => navigation.navigate('WelcomeScreen')}
                />

                <Text style={styles.additionalText}>Already have an account? <Text onPress={() => navigation.navigate('Register')}>Login</Text></Text>

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
    additionalText: {
        fontSize: 15,
        padding: 30
    }
})

export default RegisterScreen;