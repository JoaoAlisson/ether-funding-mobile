import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export function Home() {

  function handleAddAccount() {
    console.log('adding account');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ether Funding APP
      </Text>

      <TextInput 
        style={styles.input}
        placeholder="Account Token"
        placeholderTextColor="#6B6B6B"
       />
    
      <TouchableOpacity style={styles.button} onPress={handleAddAccount}>
        <Text style={styles.buttonText}>Add Account</Text>
      </TouchableOpacity>
    </View>
  );
}

