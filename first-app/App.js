import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{paddingTop: 50, paddingHorizontal: 30}}>
      <View>
        <TextInput placeholder='Course Goal' style={{height: 40, borderBottomColor: '#000', borderBottomWidth: 1, marginBottom: 10}} />
        <Button title='Add' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
