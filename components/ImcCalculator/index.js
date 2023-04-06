import React, { useState } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const ImcCalculator = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  function handleSubmit() {
    if (height === 0) {
      Alert.alert('Atenção!', 'Insira a sua altura');
      return;
    }
    if (weight === 0) {
      Alert.alert('Atenção!', 'Insira o seu peso');
      return;
    }
    let imc = weight / (height ^ 2);
    Alert.alert('imc' + imc);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Text style={styles.title}>CALCULADORA IMC</Text>
        <Text style={styles.label}>Insira sua altura</Text>
        <TextInput
          style={styles.input}
          inputMode="decimal"
          keyboardType="numeric"
          onChangeText={(e) => {
            setHeight(e);
          }}
        />
        <Text style={styles.label}>Insira seu peso</Text>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          keyboardType="numeric"
          onChangeText={(e) => {
            setWeight(e);
          }}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>CALCULAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0eed3',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  card: {
    backgroundColor: '#eee',
    width: '75%',
    padding: 16,
    borderRadius: 16,
  },
  label: {
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 4,
    borderRadius: 8,
    color: '#000',
    paddingHorizontal: 8,
  },
  btn: {
    alignSelf: 'center',
    backgroundColor: '#1b7ced',
    padding: 8,
    marginTop: 8,
    borderRadius: 8,
    width: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  btnText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ImcCalculator;
