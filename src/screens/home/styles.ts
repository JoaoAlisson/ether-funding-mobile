import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {  
      flex: 1,
      backgroundColor: '#2f3640',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 32
    },
    input: {
      height: 56,
      backgroundColor: '#1F1E25',
      padding: 16,
      fontSize: 16,
      width: '90%',
      borderRadius: 5,
      margin: 10
    },
    button: {
      borderRadius: 5,
      backgroundColor: '#31CF67',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
      paddingVertical: 10
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 24,
    }
  });