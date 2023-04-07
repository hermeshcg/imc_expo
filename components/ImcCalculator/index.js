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
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

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
    imc = imc.toFixed(2);
    if (imc < 18.5) {
      Alert.alert(
        'IMC',
        `O seu imc é de: ${imc}\nVocê esta na categoria de magreza`
      );
    } else if (imc >= 18.5 && imc < 24.9) {
      Alert.alert(
        'IMC',
        `O seu imc é de: ${imc}\nVocê esta na categoria normal`
      );
    } else if (imc > 25 && imc < 29.9) {
      Alert.alert(
        'IMC',
        `O seu imc é de: ${imc}\nVocê esta na categoria de sobrepeso`
      );
    } else if (imc > 30 && imc < 39.9) {
      Alert.alert(
        'IMC',
        `O seu imc é de: ${imc}\nVocê esta na categoria de obesidade`
      );
    } else if (imc > 40) {
      Alert.alert(
        'IMC',
        `O seu imc é de: ${imc}\nVocê esta na categoria obesidade grave`
      );
    }
    setHeight('');
    setWeight('');
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
          value={height}
        />
        <Text style={styles.label}>Insira seu peso</Text>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          keyboardType="numeric"
          onChangeText={(e) => {
            setWeight(e);
          }}
          value={weight}
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
