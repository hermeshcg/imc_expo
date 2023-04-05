import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';

const ImcCalculator = () => {
  const [height, setHeight] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>CALCULADORA IMC</Text>
      <View style={styles.card}>
        <Text style={styles.label}> First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            console.log('vasco');
          }}
          // onBlur={handleBlur('firstName')}
        />
        <Text style={styles.label}> First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => {
            console.log('vasco', e);
          }}
          // onBlur={handleBlur('firstName')}
        />
        <TouchableOpacity style={styles.btn}>
          <Text>CALCULAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  card: {
    backgroundColor: '#ddd',
    width: '50%',
    padding: 16,
    borderRadius: 16,
  },
  label: {},
  input: {
    backgroundColor: '#ccff00',
    marginBottom: 4,
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    padding: 8,
    marginTop: 8,
    borderRadius: 8,
  },
});

export default ImcCalculator;
