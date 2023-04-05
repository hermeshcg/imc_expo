import { StyleSheet } from 'react-native';
import ImcCalculator from './components/ImcCalculator';
export default function App() {
  return <ImcCalculator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
