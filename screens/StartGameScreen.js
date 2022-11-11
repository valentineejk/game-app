import React from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import PrimaryBtn from '../components/PrimaryBtn';

const StartGameScreen = () => {
    return (
        <View style={ styles.inputContainer }>
            <TextInput
                style={ styles.numberInput }
                maxLength={ 2 }
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={ false }
            />
            <PrimaryBtn>Reset</PrimaryBtn>
            <PrimaryBtn>Confirm</PrimaryBtn>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        backgroundColor: "#72032c",
        borderRadius: 8,
        marginHorizontal: 24,
        elevation: 20,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: "center",
        fontSize: 32,
        borderBottomColor: "#ddb52f",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
    }
})

export default StartGameScreen;
