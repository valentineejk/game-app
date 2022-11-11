import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const PrimaryBtn = ({ children }) => {
    return (
        <View>
            <Text>{ children }</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default PrimaryBtn;
